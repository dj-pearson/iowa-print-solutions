2025-08-27T13:42:39.406177Z	Cloning repository...
2025-08-27T13:42:40.346535Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-08-27T13:42:40.347069Z	 * branch            abab05601c4a01d045186a5dd3883d0bc7156757 -> FETCH_HEAD
2025-08-27T13:42:40.347256Z	
2025-08-27T13:42:40.422016Z	HEAD is now at abab056 Fix caching issues: Prevent HTML caching and add cache-busting for GitHub requests
2025-08-27T13:42:40.422406Z	
2025-08-27T13:42:40.500168Z	
2025-08-27T13:42:40.500617Z	Using v2 root directory strategy
2025-08-27T13:42:40.520218Z	Success: Finished cloning repository files
2025-08-27T13:42:41.254893Z	Restoring from dependencies cache
2025-08-27T13:42:41.271484Z	Restoring from build output cache
2025-08-27T13:42:41.904614Z	Success: Dependencies restored from build cache.
2025-08-27T13:42:42.909398Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-27T13:42:42.91005Z	
2025-08-27T13:42:42.911379Z	Found wrangler.toml file. Reading build configuration...
2025-08-27T13:42:44.023184Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-27T13:42:44.090424Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-08-27T13:42:44.090991Z	Installing project dependencies: npm clean-install --progress=false
2025-08-27T13:42:48.196628Z	
2025-08-27T13:42:48.196852Z	added 378 packages, and audited 379 packages in 4s
2025-08-27T13:42:48.196932Z	
2025-08-27T13:42:48.196991Z	136 packages are looking for funding
2025-08-27T13:42:48.197047Z	  run `npm fund` for details
2025-08-27T13:42:48.20515Z	
2025-08-27T13:42:48.20543Z	5 vulnerabilities (3 low, 2 moderate)
2025-08-27T13:42:48.205539Z	
2025-08-27T13:42:48.205659Z	To address issues that do not require attention, run:
2025-08-27T13:42:48.205825Z	  npm audit fix
2025-08-27T13:42:48.205938Z	
2025-08-27T13:42:48.206036Z	To address all issues (including breaking changes), run:
2025-08-27T13:42:48.206377Z	  npm audit fix --force
2025-08-27T13:42:48.206496Z	
2025-08-27T13:42:48.206575Z	Run `npm audit` for details.
2025-08-27T13:42:48.232547Z	Executing user command: npm run build
2025-08-27T13:42:48.611736Z	
2025-08-27T13:42:48.611946Z	> iowa-print-solutions@0.0.0 build
2025-08-27T13:42:48.612057Z	> vite build
2025-08-27T13:42:48.612197Z	
2025-08-27T13:42:48.842285Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-08-27T13:42:48.891517Z	transforming...
2025-08-27T13:42:50.270339Z	node_modules/framer-motion/dist/es/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/index.mjs" was ignored.
2025-08-27T13:42:51.18867Z	node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs" was ignored.
2025-08-27T13:42:51.18972Z	node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs" was ignored.
2025-08-27T13:42:51.190681Z	node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs" was ignored.
2025-08-27T13:42:51.193757Z	node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs" was ignored.
2025-08-27T13:42:51.223768Z	node_modules/framer-motion/dist/es/motion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/index.mjs" was ignored.
2025-08-27T13:42:51.234813Z	node_modules/framer-motion/dist/es/context/MotionContext/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionContext/index.mjs" was ignored.
2025-08-27T13:42:51.236074Z	node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs" was ignored.
2025-08-27T13:42:51.23668Z	node_modules/framer-motion/dist/es/context/PresenceContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/PresenceContext.mjs" was ignored.
2025-08-27T13:42:51.237292Z	node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs" was ignored.
2025-08-27T13:42:51.238024Z	node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs" was ignored.
2025-08-27T13:42:51.291482Z	node_modules/framer-motion/dist/es/context/LazyContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LazyContext.mjs" was ignored.
2025-08-27T13:42:51.295301Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs" was ignored.
2025-08-27T13:42:51.413758Z	node_modules/framer-motion/dist/es/components/Reorder/Group.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Group.mjs" was ignored.
2025-08-27T13:42:51.414769Z	node_modules/framer-motion/dist/es/components/Reorder/Item.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Item.mjs" was ignored.
2025-08-27T13:42:51.454983Z	node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs" was ignored.
2025-08-27T13:42:51.458938Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs" was ignored.
2025-08-27T13:42:51.483728Z	node_modules/framer-motion/dist/es/context/ReorderContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/ReorderContext.mjs" was ignored.
2025-08-27T13:42:52.565272Z	[32m✓[39m 2001 modules transformed.
2025-08-27T13:42:52.88898Z	rendering chunks...
2025-08-27T13:42:52.907618Z	computing gzip size...
2025-08-27T13:42:52.936309Z	[2mdist/[22m[32mindex.html                 [39m[1m[2m    0.84 kB[22m[1m[22m[2m │ gzip:   0.44 kB[22m
2025-08-27T13:42:52.936663Z	[2mdist/[22m[2massets/[22m[35mindex-Bv3NC5aP.css  [39m[1m[2m   45.24 kB[22m[1m[22m[2m │ gzip:   7.30 kB[22m
2025-08-27T13:42:52.936856Z	[2mdist/[22m[2massets/[22m[36mindex-D73BRYQ8.js   [39m[1m[33m1,101.82 kB[39m[22m[2m │ gzip: 226.75 kB[22m
2025-08-27T13:42:52.937102Z	[32m✓ built in 4.07s[39m
2025-08-27T13:42:52.937298Z	[33m
2025-08-27T13:42:52.937545Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-27T13:42:52.937664Z	- Using dynamic import() to code-split the application
2025-08-27T13:42:52.93775Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-27T13:42:52.937847Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-27T13:42:53.046295Z	Finished
2025-08-27T13:42:53.932244Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-27T13:42:53.932827Z	
2025-08-27T13:42:53.933795Z	Found wrangler.toml file. Reading build configuration...
2025-08-27T13:42:55.036834Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-27T13:42:55.037746Z	Note: No functions dir at /functions found. Skipping.
2025-08-27T13:42:55.037893Z	Validating asset output directory
2025-08-27T13:42:57.783289Z	Deploying your site to Cloudflare's global network...
2025-08-27T13:42:59.180614Z	Parsed 6 valid redirect rules.
2025-08-27T13:42:59.180995Z	Found invalid redirect lines:
2025-08-27T13:42:59.181085Z	  - #10: /* /index.html 200
2025-08-27T13:42:59.181179Z	    Infinite loop detected in this rule and has been ignored. This will cause a redirect to strip `.html` or `/index` and end up triggering this rule again. Please fix or remove this rule to silence this warning.
2025-08-27T13:42:59.181252Z	Info: the redirect rule /IPSLogo-Icon.ico → 200 /IPSLogo-Icon.ico could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T13:42:59.181343Z	Info: the redirect rule /IPSLogo.png → 200 /IPSLogo.png could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T13:42:59.181427Z	Info: the redirect rule /robots.txt → 200 /robots.txt could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T13:42:59.18149Z	Info: the redirect rule /sitemap.xml → 200 /sitemap.xml could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T13:42:59.18157Z	Info: the redirect rule /test-deploy.txt → 200 /test-deploy.txt could be made more performant by bringing it above any lines with splats or placeholders.
2025-08-27T13:42:59.181643Z	Parsed 13 valid header rules.
2025-08-27T13:43:00.398461Z	Uploading... (14/14)
2025-08-27T13:43:00.399498Z	✨ Success! Uploaded 0 files (14 already uploaded) (0.34 sec)
2025-08-27T13:43:00.399709Z	
2025-08-27T13:43:00.819086Z	✨ Upload complete!
2025-08-27T13:43:03.510869Z	Skipping build output cache as it's not supported for your project
2025-08-27T13:43:04.671316Z	Success: Assets published!
2025-08-27T13:43:06.63514Z	Success: Your site was deployed!