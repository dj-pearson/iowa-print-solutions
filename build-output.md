2025-08-26T15:53:14.415457Z	Cloning repository...
2025-08-26T15:53:15.386163Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-08-26T15:53:15.386651Z	 * branch            334342054e3fd7e83d4470e05d7fc41a18a424df -> FETCH_HEAD
2025-08-26T15:53:15.386759Z	
2025-08-26T15:53:15.464023Z	HEAD is now at 3343420 Add Cloudflare Worker and built dist files for GitHub serving
2025-08-26T15:53:15.4646Z	
2025-08-26T15:53:15.543717Z	
2025-08-26T15:53:15.544202Z	Using v2 root directory strategy
2025-08-26T15:53:15.566717Z	Success: Finished cloning repository files
2025-08-26T15:53:17.309077Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T15:53:17.309795Z	
2025-08-26T15:53:17.311235Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T15:53:18.424885Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T15:53:18.488198Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-08-26T15:53:18.488825Z	Installing project dependencies: npm clean-install --progress=false
2025-08-26T15:53:24.114196Z	
2025-08-26T15:53:24.114815Z	added 378 packages, and audited 379 packages in 5s
2025-08-26T15:53:24.114952Z	
2025-08-26T15:53:24.115114Z	136 packages are looking for funding
2025-08-26T15:53:24.115198Z	  run `npm fund` for details
2025-08-26T15:53:24.125218Z	
2025-08-26T15:53:24.125393Z	5 vulnerabilities (3 low, 2 moderate)
2025-08-26T15:53:24.125531Z	
2025-08-26T15:53:24.125635Z	To address issues that do not require attention, run:
2025-08-26T15:53:24.125737Z	  npm audit fix
2025-08-26T15:53:24.125842Z	
2025-08-26T15:53:24.125914Z	To address all issues (including breaking changes), run:
2025-08-26T15:53:24.126036Z	  npm audit fix --force
2025-08-26T15:53:24.126154Z	
2025-08-26T15:53:24.12625Z	Run `npm audit` for details.
2025-08-26T15:53:24.15265Z	Executing user command: npm run build
2025-08-26T15:53:24.507531Z	
2025-08-26T15:53:24.507759Z	> iowa-print-solutions@0.0.0 build
2025-08-26T15:53:24.507878Z	> vite build
2025-08-26T15:53:24.507981Z	
2025-08-26T15:53:24.722047Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-08-26T15:53:24.775903Z	transforming...
2025-08-26T15:53:26.196379Z	node_modules/framer-motion/dist/es/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/index.mjs" was ignored.
2025-08-26T15:53:27.097644Z	node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs" was ignored.
2025-08-26T15:53:27.098734Z	node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs" was ignored.
2025-08-26T15:53:27.099977Z	node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs" was ignored.
2025-08-26T15:53:27.103745Z	node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs" was ignored.
2025-08-26T15:53:27.132312Z	node_modules/framer-motion/dist/es/motion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/index.mjs" was ignored.
2025-08-26T15:53:27.141224Z	node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs" was ignored.
2025-08-26T15:53:27.143248Z	node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs" was ignored.
2025-08-26T15:53:27.143894Z	node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs" was ignored.
2025-08-26T15:53:27.144452Z	node_modules/framer-motion/dist/es/context/PresenceContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/PresenceContext.mjs" was ignored.
2025-08-26T15:53:27.146166Z	node_modules/framer-motion/dist/es/context/MotionContext/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionContext/index.mjs" was ignored.
2025-08-26T15:53:27.207087Z	node_modules/framer-motion/dist/es/context/LazyContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LazyContext.mjs" was ignored.
2025-08-26T15:53:27.209721Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs" was ignored.
2025-08-26T15:53:27.332496Z	node_modules/framer-motion/dist/es/components/Reorder/Item.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Item.mjs" was ignored.
2025-08-26T15:53:27.333529Z	node_modules/framer-motion/dist/es/components/Reorder/Group.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Group.mjs" was ignored.
2025-08-26T15:53:27.377576Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs" was ignored.
2025-08-26T15:53:27.378183Z	node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs" was ignored.
2025-08-26T15:53:27.408998Z	node_modules/framer-motion/dist/es/context/ReorderContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/ReorderContext.mjs" was ignored.
2025-08-26T15:53:28.499887Z	[32m✓[39m 2001 modules transformed.
2025-08-26T15:53:28.830216Z	rendering chunks...
2025-08-26T15:53:28.842568Z	computing gzip size...
2025-08-26T15:53:28.865039Z	[2mdist/[22m[32mindex.html                 [39m[1m[2m    0.84 kB[22m[1m[22m[2m │ gzip:   0.44 kB[22m
2025-08-26T15:53:28.865544Z	[2mdist/[22m[2massets/[22m[35mindex-Bv3NC5aP.css  [39m[1m[2m   45.24 kB[22m[1m[22m[2m │ gzip:   7.30 kB[22m
2025-08-26T15:53:28.865761Z	[2mdist/[22m[2massets/[22m[36mindex-D73BRYQ8.js   [39m[1m[33m1,101.82 kB[39m[22m[2m │ gzip: 226.75 kB[22m
2025-08-26T15:53:28.866281Z	[32m✓ built in 4.12s[39m
2025-08-26T15:53:28.866501Z	[33m
2025-08-26T15:53:28.866697Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-26T15:53:28.866852Z	- Using dynamic import() to code-split the application
2025-08-26T15:53:28.867052Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-26T15:53:28.867175Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-26T15:53:28.923036Z	Finished
2025-08-26T15:53:29.793083Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T15:53:29.793636Z	
2025-08-26T15:53:29.79444Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T15:53:30.903111Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T15:53:30.903913Z	Found Functions directory at /functions. Uploading.
2025-08-26T15:53:30.909115Z	 ⛅️ wrangler 3.101.0
2025-08-26T15:53:30.90929Z	-------------------
2025-08-26T15:53:31.843226Z	✨ Compiled Worker successfully
2025-08-26T15:53:32.995663Z	Validating asset output directory
2025-08-26T15:53:35.720057Z	Deploying your site to Cloudflare's global network...
2025-08-26T15:53:38.179491Z	Parsed 0 valid redirect rules.
2025-08-26T15:53:38.180039Z	Found invalid redirect lines:
2025-08-26T15:53:38.180162Z	  - #5: /*    /index.html   200
2025-08-26T15:53:38.180326Z	    Infinite loop detected in this rule and has been ignored. This will cause a redirect to strip `.html` or `/index` and end up triggering this rule again. Please fix or remove this rule to silence this warning.
2025-08-26T15:53:38.180504Z	Parsed 3 valid header rules.
2025-08-26T15:53:39.410065Z	Uploading... (11/11)
2025-08-26T15:53:39.410907Z	✨ Success! Uploaded 0 files (11 already uploaded) (0.36 sec)
2025-08-26T15:53:39.411035Z	
2025-08-26T15:53:39.76902Z	✨ Upload complete!
2025-08-26T15:53:43.576192Z	Success: Assets published!
2025-08-26T15:53:45.853097Z	Success: Your site was deployed!


Older Build:
2025-07-24T15:04:05.751787Z	Cloning repository...
2025-07-24T15:04:06.964142Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-07-24T15:04:06.964668Z	 * branch            01cd320b9597bc4e8e66d1a3d833ba4e82fa04e2 -> FETCH_HEAD
2025-07-24T15:04:06.964774Z	
2025-07-24T15:04:07.034869Z	HEAD is now at 01cd320 feat: update sitemap with new lastmod dates for improved SEO
2025-07-24T15:04:07.035292Z	
2025-07-24T15:04:07.113633Z	
2025-07-24T15:04:07.114076Z	Using v2 root directory strategy
2025-07-24T15:04:07.134227Z	Success: Finished cloning repository files
2025-07-24T15:04:08.768469Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-24T15:04:08.769147Z	
2025-07-24T15:04:09.867377Z	No wrangler.toml file found. Continuing.
2025-07-24T15:04:09.931621Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-07-24T15:04:09.932166Z	Installing project dependencies: npm clean-install --progress=false
2025-07-24T15:04:15.476616Z	
2025-07-24T15:04:15.476936Z	added 372 packages, and audited 373 packages in 5s
2025-07-24T15:04:15.477052Z	
2025-07-24T15:04:15.477172Z	136 packages are looking for funding
2025-07-24T15:04:15.477283Z	  run `npm fund` for details
2025-07-24T15:04:15.485546Z	
2025-07-24T15:04:15.485756Z	5 vulnerabilities (1 low, 2 moderate, 2 high)
2025-07-24T15:04:15.485891Z	
2025-07-24T15:04:15.486008Z	To address issues that do not require attention, run:
2025-07-24T15:04:15.486174Z	  npm audit fix
2025-07-24T15:04:15.486292Z	
2025-07-24T15:04:15.486414Z	To address all issues (including breaking changes), run:
2025-07-24T15:04:15.486536Z	  npm audit fix --force
2025-07-24T15:04:15.486701Z	
2025-07-24T15:04:15.486838Z	Run `npm audit` for details.
2025-07-24T15:04:15.513991Z	Executing user command: npm run build
2025-07-24T15:04:15.887491Z	
2025-07-24T15:04:15.887764Z	> iowa-print-solutions@0.0.0 build
2025-07-24T15:04:15.887924Z	> vite build
2025-07-24T15:04:15.888072Z	
2025-07-24T15:04:16.107623Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-07-24T15:04:16.44242Z	transforming...
2025-07-24T15:04:17.293054Z	node_modules/framer-motion/dist/es/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/index.mjs" was ignored.
2025-07-24T15:04:17.538421Z	node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs" was ignored.
2025-07-24T15:04:17.540468Z	node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs" was ignored.
2025-07-24T15:04:17.544073Z	node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs" was ignored.
2025-07-24T15:04:17.54862Z	node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs" was ignored.
2025-07-24T15:04:17.564018Z	node_modules/framer-motion/dist/es/motion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/index.mjs" was ignored.
2025-07-24T15:04:17.580004Z	node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs" was ignored.
2025-07-24T15:04:17.581738Z	node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs" was ignored.
2025-07-24T15:04:17.583854Z	node_modules/framer-motion/dist/es/context/MotionContext/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionContext/index.mjs" was ignored.
2025-07-24T15:04:17.584565Z	node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs" was ignored.
2025-07-24T15:04:17.588005Z	node_modules/framer-motion/dist/es/context/PresenceContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/PresenceContext.mjs" was ignored.
2025-07-24T15:04:18.535646Z	node_modules/framer-motion/dist/es/context/LazyContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LazyContext.mjs" was ignored.
2025-07-24T15:04:18.541724Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs" was ignored.
2025-07-24T15:04:18.666264Z	node_modules/framer-motion/dist/es/components/Reorder/Item.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Item.mjs" was ignored.
2025-07-24T15:04:18.667292Z	node_modules/framer-motion/dist/es/components/Reorder/Group.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Group.mjs" was ignored.
2025-07-24T15:04:18.699588Z	node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs" was ignored.
2025-07-24T15:04:18.70524Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs" was ignored.
2025-07-24T15:04:18.73736Z	node_modules/framer-motion/dist/es/context/ReorderContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/ReorderContext.mjs" was ignored.
2025-07-24T15:04:19.792687Z	[32m✓[39m 1988 modules transformed.
2025-07-24T15:04:20.111988Z	rendering chunks...
2025-07-24T15:04:20.123178Z	computing gzip size...
2025-07-24T15:04:20.143153Z	[2mdist/[22m[32mindex.html                 [39m[1m[2m  0.84 kB[22m[1m[22m[2m │ gzip:   0.44 kB[22m
2025-07-24T15:04:20.143619Z	[2mdist/[22m[2massets/[22m[35mindex-v-qB7SYA.css  [39m[1m[2m 43.20 kB[22m[1m[22m[2m │ gzip:   6.99 kB[22m
2025-07-24T15:04:20.143737Z	[2mdist/[22m[2massets/[22m[36mindex-BSfLMRjx.js   [39m[1m[33m958.87 kB[39m[22m[2m │ gzip: 200.75 kB[22m
2025-07-24T15:04:20.143901Z	[32m✓ built in 4.01s[39m
2025-07-24T15:04:20.144006Z	[33m
2025-07-24T15:04:20.144149Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-07-24T15:04:20.144256Z	- Using dynamic import() to code-split the application
2025-07-24T15:04:20.144351Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-07-24T15:04:20.144543Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-07-24T15:04:20.206383Z	Finished
2025-07-24T15:04:21.090265Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-24T15:04:21.090968Z	
2025-07-24T15:04:22.179657Z	No wrangler.toml file found. Continuing.
2025-07-24T15:04:22.180303Z	Note: No functions dir at /functions found. Skipping.
2025-07-24T15:04:22.180448Z	Validating asset output directory
2025-07-24T15:04:24.805437Z	Deploying your site to Cloudflare's global network...
2025-07-24T15:04:27.019349Z	Uploading... (6/7)
2025-07-24T15:04:27.631429Z	Uploading... (7/7)
2025-07-24T15:04:27.631902Z	✨ Success! Uploaded 1 files (6 already uploaded) (0.93 sec)
2025-07-24T15:04:27.632108Z	
2025-07-24T15:04:28.064686Z	✨ Upload complete!
2025-07-24T15:04:31.478242Z	Success: Assets published!
2025-07-24T15:04:33.456807Z	Success: Your site was deployed!