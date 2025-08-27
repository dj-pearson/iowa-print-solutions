2025-08-27T14:17:05.113436Z	Cloning repository...
2025-08-27T14:17:06.025435Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-08-27T14:17:06.025933Z	 * branch            c1b841782b29640cea15b84efa1b80793cb0c259 -> FETCH_HEAD
2025-08-27T14:17:06.02607Z	
2025-08-27T14:17:06.097886Z	HEAD is now at c1b8417 Fix build consistency: Include vite.config.js and fix _redirects infinite loop - remote builds should now match local
2025-08-27T14:17:06.098371Z	
2025-08-27T14:17:06.177643Z	
2025-08-27T14:17:06.178242Z	Using v2 root directory strategy
2025-08-27T14:17:06.199505Z	Success: Finished cloning repository files
2025-08-27T14:17:07.007471Z	Restoring from dependencies cache
2025-08-27T14:17:07.024539Z	Restoring from build output cache
2025-08-27T14:17:07.726021Z	Success: Dependencies restored from build cache.
2025-08-27T14:17:08.74139Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-27T14:17:08.74201Z	
2025-08-27T14:17:08.74344Z	Found wrangler.toml file. Reading build configuration...
2025-08-27T14:17:08.750475Z	pages_build_output_dir: dist
2025-08-27T14:17:08.750657Z	Build environment variables: (none found)
2025-08-27T14:17:09.890729Z	Successfully read wrangler.toml file.
2025-08-27T14:17:09.957483Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-08-27T14:17:09.958158Z	Installing project dependencies: npm clean-install --progress=false
2025-08-27T14:17:14.136554Z	
2025-08-27T14:17:14.136792Z	added 378 packages, and audited 379 packages in 4s
2025-08-27T14:17:14.136933Z	
2025-08-27T14:17:14.137023Z	136 packages are looking for funding
2025-08-27T14:17:14.13712Z	  run `npm fund` for details
2025-08-27T14:17:14.14788Z	
2025-08-27T14:17:14.148034Z	5 vulnerabilities (3 low, 2 moderate)
2025-08-27T14:17:14.148171Z	
2025-08-27T14:17:14.148273Z	To address issues that do not require attention, run:
2025-08-27T14:17:14.148405Z	  npm audit fix
2025-08-27T14:17:14.148513Z	
2025-08-27T14:17:14.148625Z	To address all issues (including breaking changes), run:
2025-08-27T14:17:14.148725Z	  npm audit fix --force
2025-08-27T14:17:14.148822Z	
2025-08-27T14:17:14.148914Z	Run `npm audit` for details.
2025-08-27T14:17:14.175849Z	Executing user command: npm run build
2025-08-27T14:17:14.556936Z	
2025-08-27T14:17:14.557259Z	> iowa-print-solutions@0.0.0 build
2025-08-27T14:17:14.55755Z	> vite build
2025-08-27T14:17:14.557728Z	
2025-08-27T14:17:14.809309Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-08-27T14:17:15.129964Z	transforming...
2025-08-27T14:17:18.641907Z	[32m✓[39m 2001 modules transformed.
2025-08-27T14:17:21.910606Z	rendering chunks...
2025-08-27T14:17:21.925199Z	computing gzip size...
2025-08-27T14:17:21.946704Z	[2mdist/[22m[32mindex.html                               [39m[1m[2m    0.86 kB[22m[1m[22m[2m │ gzip:   0.45 kB[22m
2025-08-27T14:17:21.946896Z	[2mdist/[22m[2massets/[22m[35mindex-Bv3NC5aP-1756304234787.css  [39m[1m[2m   45.24 kB[22m[1m[22m[2m │ gzip:   7.30 kB[22m
2025-08-27T14:17:21.947047Z	[2mdist/[22m[2massets/[22m[36mapp-Dhn-h7nd-1756304234787.js     [39m[1m[33m1,079.10 kB[39m[22m[2m │ gzip: 222.65 kB[22m
2025-08-27T14:17:21.94741Z	[32m✓ built in 7.12s[39m
2025-08-27T14:17:21.948407Z	[33m
2025-08-27T14:17:21.948561Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-27T14:17:21.948815Z	- Using dynamic import() to code-split the application
2025-08-27T14:17:21.948894Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-27T14:17:21.949067Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-27T14:17:22.023309Z	Finished
2025-08-27T14:17:22.946132Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-27T14:17:22.946685Z	
2025-08-27T14:17:22.947834Z	Found wrangler.toml file. Reading build configuration...
2025-08-27T14:17:22.954501Z	pages_build_output_dir: dist
2025-08-27T14:17:22.954838Z	Build environment variables: (none found)
2025-08-27T14:17:24.06998Z	Successfully read wrangler.toml file.
2025-08-27T14:17:24.071062Z	Note: No functions dir at /functions found. Skipping.
2025-08-27T14:17:24.071185Z	Validating asset output directory
2025-08-27T14:17:26.903922Z	Deploying your site to Cloudflare's global network...
2025-08-27T14:17:27.871803Z	Parsed 7 valid redirect rules.
2025-08-27T14:17:27.872254Z	Info: the redirect rule /IPSLogo-Icon.ico → 200 /IPSLogo-Icon.ico could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T14:17:27.872498Z	Info: the redirect rule /IPSLogo.png → 200 /IPSLogo.png could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T14:17:27.872615Z	Info: the redirect rule /robots.txt → 200 /robots.txt could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T14:17:27.873041Z	Info: the redirect rule /sitemap.xml → 200 /sitemap.xml could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T14:17:27.873229Z	Info: the redirect rule /test-deploy.txt → 200 /test-deploy.txt could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T14:17:27.873668Z	Parsed 13 valid header rules.
2025-08-27T14:17:29.038584Z	Uploading... (11/13)
2025-08-27T14:17:29.721786Z	Uploading... (12/13)
2025-08-27T14:17:30.557487Z	Uploading... (13/13)
2025-08-27T14:17:30.55775Z	✨ Success! Uploaded 2 files (11 already uploaded) (1.81 sec)
2025-08-27T14:17:30.557841Z	
2025-08-27T14:17:30.967732Z	✨ Upload complete!
2025-08-27T14:17:33.243026Z	Skipping build output cache as it's not supported for your project
2025-08-27T14:17:34.658808Z	Success: Assets published!
2025-08-27T14:17:36.458328Z	Success: Your site was deployed!