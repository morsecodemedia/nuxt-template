help:
	@echo "Targets:"
	@echo "\tproduction       - update the latest code and build production environment"
	@echo "\tstage            - update the latest code and build stage environment"
	@echo "\tswap-env         - reverse stage and production environments in nginx"
	@echo "\tenvironment      - which environment is running in which mode?"

environment:
	@if [ "3000" = "$$(grep "127.0.0.1" /etc/nginx/sites-available/production | sed "s/^.*://" | sed "s/;.*$$//")" ]; then \
		printf "Production: serva\\n"; \
	else \
		printf "Production: servb\\n"; \
	fi

production:
	@if [ "3000" = "$$(grep "127.0.0.1" /etc/nginx/sites-available/production | sed "s/^.*://" | sed "s/;.*$$//")" ]; then \
		$(MAKE) serva; \
	else \
		$(MAKE) servb; \
	fi

stage:
	@if [ "3000" = "$$(grep "127.0.0.1" /etc/nginx/sites-available/production | sed "s/^.*://" | sed "s/;.*$$//")" ]; then \
		$(MAKE) servb; \
	else \
		$(MAKE) serva; \
	fi

serva:
	cd "./serva"; \
	git reset --hard HEAD; \
	git pull; \
	git lfs pull; \
	npm install; \
	npm run build
	pm2 startOrRestart ecosystem.config.js --only serva

servb:
	cd "./servb"; \
	git reset --hard HEAD; \
	git pull; \
	git lfs pull; \
	npm install; \
	npm run build
	pm2 startOrRestart ecosystem.config.js --only servb

swap-env:
	@if [ "3000" = "$$(grep "127.0.0.1" /etc/nginx/sites-available/production | sed "s/^.*://" | sed "s/;.*$$//")" ]; then \
		sudo sed -i"" -e 's/3000/4000/' /etc/nginx/sites-available/production; \
		sudo sed -i"" -e 's/4000/3000/' /etc/nginx/sites-available/stage; \
		sudo systemctl reload nginx; \
	else \
		sudo sed -i"" -e 's/4000/3000/' /etc/nginx/sites-available/production; \
		sudo sed -i"" -e 's/3000/4000/' /etc/nginx/sites-available/stage; \
		sudo systemctl reload nginx; \
	fi

.PHONY: help environment serva servb swap-env production stage
