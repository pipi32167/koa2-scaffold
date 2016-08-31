test:
	git pull && npm install && export NODE_ENV=development && pm2 startOrRestart ecosystem.json 
online:
	git pull && npm install && export NODE_ENV=production && pm2 startOrRestart ecosystem.json 
