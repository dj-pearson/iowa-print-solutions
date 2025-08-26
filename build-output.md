2025-08-26T16:32:36.999091Z	Cloning repository...
2025-08-26T16:32:37.982618Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-08-26T16:32:37.983334Z	 * branch            9ce9ee22809bce2d9bb2fd0a461b90bac086dc14 -> FETCH_HEAD
2025-08-26T16:32:37.98347Z	
2025-08-26T16:32:38.057265Z	HEAD is now at 9ce9ee2 Simplify Cloudflare deployment: fix _redirects syntax and remove _headers
2025-08-26T16:32:38.057694Z	
2025-08-26T16:32:38.138475Z	
2025-08-26T16:32:38.138989Z	Using v2 root directory strategy
2025-08-26T16:32:38.158968Z	Success: Finished cloning repository files
2025-08-26T16:32:39.953331Z	Restoring from dependencies cache
2025-08-26T16:32:39.970139Z	Restoring from build output cache
2025-08-26T16:32:40.664525Z	Success: Dependencies restored from build cache.
2025-08-26T16:32:41.754252Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T16:32:41.754934Z	
2025-08-26T16:32:41.756443Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T16:32:42.863522Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T16:32:42.929385Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-08-26T16:32:42.930111Z	Installing project dependencies: npm clean-install --progress=false
2025-08-26T16:32:47.016211Z	
2025-08-26T16:32:47.016414Z	added 378 packages, and audited 379 packages in 4s
2025-08-26T16:32:47.016513Z	
2025-08-26T16:32:47.016594Z	136 packages are looking for funding
2025-08-26T16:32:47.016659Z	  run `npm fund` for details
2025-08-26T16:32:47.026309Z	
2025-08-26T16:32:47.026533Z	5 vulnerabilities (3 low, 2 moderate)
2025-08-26T16:32:47.02669Z	
2025-08-26T16:32:47.026831Z	To address issues that do not require attention, run:
2025-08-26T16:32:47.027052Z	  npm audit fix
2025-08-26T16:32:47.027197Z	
2025-08-26T16:32:47.027327Z	To address all issues (including breaking changes), run:
2025-08-26T16:32:47.027455Z	  npm audit fix --force
2025-08-26T16:32:47.027571Z	
2025-08-26T16:32:47.027696Z	Run `npm audit` for details.
2025-08-26T16:32:47.056545Z	Executing user command: npm run build
2025-08-26T16:32:47.424052Z	
2025-08-26T16:32:47.424262Z	> iowa-print-solutions@0.0.0 build
2025-08-26T16:32:47.424348Z	> vite build
2025-08-26T16:32:47.424505Z	
2025-08-26T16:32:47.646899Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-08-26T16:32:47.699714Z	transforming...
2025-08-26T16:32:48.961104Z	node_modules/framer-motion/dist/es/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/index.mjs" was ignored.
2025-08-26T16:32:49.145692Z	node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs" was ignored.
2025-08-26T16:32:49.146498Z	node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs" was ignored.
2025-08-26T16:32:49.147588Z	node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs" was ignored.
2025-08-26T16:32:49.160433Z	node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs" was ignored.
2025-08-26T16:32:49.174913Z	node_modules/framer-motion/dist/es/motion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/index.mjs" was ignored.
2025-08-26T16:32:49.187124Z	node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs" was ignored.
2025-08-26T16:32:49.188736Z	node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs" was ignored.
2025-08-26T16:32:49.189384Z	node_modules/framer-motion/dist/es/context/MotionContext/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionContext/index.mjs" was ignored.
2025-08-26T16:32:49.193162Z	node_modules/framer-motion/dist/es/context/PresenceContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/PresenceContext.mjs" was ignored.
2025-08-26T16:32:49.194607Z	node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs" was ignored.
2025-08-26T16:32:50.124218Z	node_modules/framer-motion/dist/es/context/LazyContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LazyContext.mjs" was ignored.
2025-08-26T16:32:50.129328Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs" was ignored.
2025-08-26T16:32:50.252265Z	node_modules/framer-motion/dist/es/components/Reorder/Group.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Group.mjs" was ignored.
2025-08-26T16:32:50.253929Z	node_modules/framer-motion/dist/es/components/Reorder/Item.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Item.mjs" was ignored.
2025-08-26T16:32:50.298075Z	node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs" was ignored.
2025-08-26T16:32:50.301801Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs" was ignored.
2025-08-26T16:32:50.334726Z	node_modules/framer-motion/dist/es/context/ReorderContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/ReorderContext.mjs" was ignored.
2025-08-26T16:32:51.501448Z	[32m✓[39m 2001 modules transformed.
2025-08-26T16:32:51.854716Z	rendering chunks...
2025-08-26T16:32:51.874156Z	computing gzip size...
2025-08-26T16:32:51.904211Z	[2mdist/[22m[32mindex.html                 [39m[1m[2m    0.84 kB[22m[1m[22m[2m │ gzip:   0.44 kB[22m
2025-08-26T16:32:51.904658Z	[2mdist/[22m[2massets/[22m[35mindex-Bv3NC5aP.css  [39m[1m[2m   45.24 kB[22m[1m[22m[2m │ gzip:   7.30 kB[22m
2025-08-26T16:32:51.904801Z	[2mdist/[22m[2massets/[22m[36mindex-D73BRYQ8.js   [39m[1m[33m1,101.82 kB[39m[22m[2m │ gzip: 226.75 kB[22m
2025-08-26T16:32:51.904994Z	[32m✓ built in 4.23s[39m
2025-08-26T16:32:51.905206Z	[33m
2025-08-26T16:32:51.905316Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-26T16:32:51.905511Z	- Using dynamic import() to code-split the application
2025-08-26T16:32:51.905686Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-26T16:32:51.905785Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-26T16:32:52.014914Z	Finished
2025-08-26T16:32:52.932693Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T16:32:52.933333Z	
2025-08-26T16:32:52.933902Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T16:32:54.051469Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T16:32:54.052392Z	Note: No functions dir at /functions found. Skipping.
2025-08-26T16:32:54.052553Z	Validating asset output directory
2025-08-26T16:32:57.324118Z	Deploying your site to Cloudflare's global network...
2025-08-26T16:32:58.479182Z	Parsed 0 valid redirect rules.
2025-08-26T16:32:58.479538Z	Found invalid redirect lines:
2025-08-26T16:32:58.479658Z	  - #3: /* /index.html 200
2025-08-26T16:32:58.479728Z	    Infinite loop detected in this rule and has been ignored. This will cause a redirect to strip `.html` or `/index` and end up triggering this rule again. Please fix or remove this rule to silence this warning.
2025-08-26T16:32:59.704636Z	Uploading... (11/11)
2025-08-26T16:32:59.705945Z	✨ Success! Uploaded 0 files (11 already uploaded) (0.35 sec)
2025-08-26T16:32:59.706128Z	
2025-08-26T16:33:00.073257Z	✨ Upload complete!
2025-08-26T16:33:02.822063Z	Skipping build output cache as it's not supported for your project
2025-08-26T16:33:04.374076Z	Success: Assets published!
2025-08-26T16:33:06.54929Z	Success: Your site was deployed!