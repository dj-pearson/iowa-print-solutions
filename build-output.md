2025-08-26T15:38:30.593064Z	Cloning repository...
2025-08-26T15:38:31.593636Z	From https://github.com/dj-pearson/iowa-print-solutions
2025-08-26T15:38:31.594077Z	 * branch            e29a9d5566318e090c6eff86ddfbade0a5ee6e3f -> FETCH_HEAD
2025-08-26T15:38:31.594175Z	
2025-08-26T15:38:31.663756Z	HEAD is now at e29a9d5 feat: implement aggressive MIME type enforcement and error handling for asset requests
2025-08-26T15:38:31.664189Z	
2025-08-26T15:38:31.752618Z	
2025-08-26T15:38:31.753061Z	Using v2 root directory strategy
2025-08-26T15:38:31.777235Z	Success: Finished cloning repository files
2025-08-26T15:38:33.559888Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T15:38:33.560509Z	
2025-08-26T15:38:33.561816Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T15:38:34.735674Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T15:38:34.804449Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-08-26T15:38:34.805067Z	Installing project dependencies: npm clean-install --progress=false
2025-08-26T15:38:40.796572Z	
2025-08-26T15:38:40.797199Z	added 378 packages, and audited 379 packages in 6s
2025-08-26T15:38:40.797585Z	
2025-08-26T15:38:40.797733Z	136 packages are looking for funding
2025-08-26T15:38:40.797851Z	  run `npm fund` for details
2025-08-26T15:38:40.805871Z	
2025-08-26T15:38:40.806047Z	5 vulnerabilities (3 low, 2 moderate)
2025-08-26T15:38:40.806164Z	
2025-08-26T15:38:40.806267Z	To address issues that do not require attention, run:
2025-08-26T15:38:40.806355Z	  npm audit fix
2025-08-26T15:38:40.806433Z	
2025-08-26T15:38:40.806492Z	To address all issues (including breaking changes), run:
2025-08-26T15:38:40.806605Z	  npm audit fix --force
2025-08-26T15:38:40.806668Z	
2025-08-26T15:38:40.806724Z	Run `npm audit` for details.
2025-08-26T15:38:40.838703Z	Executing user command: npm run build
2025-08-26T15:38:41.241308Z	
2025-08-26T15:38:41.241642Z	> iowa-print-solutions@0.0.0 build
2025-08-26T15:38:41.241828Z	> vite build
2025-08-26T15:38:41.241953Z	
2025-08-26T15:38:41.470502Z	[36mvite v5.4.19 [32mbuilding for production...[36m[39m
2025-08-26T15:38:41.528634Z	transforming...
2025-08-26T15:38:42.78448Z	node_modules/framer-motion/dist/es/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/index.mjs" was ignored.
2025-08-26T15:38:42.995999Z	node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs" was ignored.
2025-08-26T15:38:42.997113Z	node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs" was ignored.
2025-08-26T15:38:42.999417Z	node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs" was ignored.
2025-08-26T15:38:43.00312Z	node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs" was ignored.
2025-08-26T15:38:43.021682Z	node_modules/framer-motion/dist/es/motion/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/index.mjs" was ignored.
2025-08-26T15:38:43.038711Z	node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs" was ignored.
2025-08-26T15:38:43.0392Z	node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs" was ignored.
2025-08-26T15:38:43.040861Z	node_modules/framer-motion/dist/es/context/MotionContext/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/MotionContext/index.mjs" was ignored.
2025-08-26T15:38:43.042526Z	node_modules/framer-motion/dist/es/context/PresenceContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/PresenceContext.mjs" was ignored.
2025-08-26T15:38:43.043882Z	node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs" was ignored.
2025-08-26T15:38:44.016902Z	node_modules/framer-motion/dist/es/context/LazyContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/LazyContext.mjs" was ignored.
2025-08-26T15:38:44.01935Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs" was ignored.
2025-08-26T15:38:44.147608Z	node_modules/framer-motion/dist/es/components/Reorder/Item.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Item.mjs" was ignored.
2025-08-26T15:38:44.149307Z	node_modules/framer-motion/dist/es/components/Reorder/Group.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/Reorder/Group.mjs" was ignored.
2025-08-26T15:38:44.195516Z	node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs" was ignored.
2025-08-26T15:38:44.201747Z	node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs" was ignored.
2025-08-26T15:38:44.232953Z	node_modules/framer-motion/dist/es/context/ReorderContext.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/framer-motion/dist/es/context/ReorderContext.mjs" was ignored.
2025-08-26T15:38:45.429912Z	[32m✓[39m 2001 modules transformed.
2025-08-26T15:38:45.758195Z	rendering chunks...
2025-08-26T15:38:45.772699Z	computing gzip size...
2025-08-26T15:38:45.80064Z	[2mdist/[22m[32mindex.html                 [39m[1m[2m    0.84 kB[22m[1m[22m[2m │ gzip:   0.44 kB[22m
2025-08-26T15:38:45.801091Z	[2mdist/[22m[2massets/[22m[35mindex-Bv3NC5aP.css  [39m[1m[2m   45.24 kB[22m[1m[22m[2m │ gzip:   7.30 kB[22m
2025-08-26T15:38:45.801612Z	[2mdist/[22m[2massets/[22m[36mindex-D73BRYQ8.js   [39m[1m[33m1,101.82 kB[39m[22m[2m │ gzip: 226.75 kB[22m
2025-08-26T15:38:45.801746Z	[33m
2025-08-26T15:38:45.801897Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-08-26T15:38:45.802009Z	- Using dynamic import() to code-split the application
2025-08-26T15:38:45.802104Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-08-26T15:38:45.802297Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
2025-08-26T15:38:45.802696Z	[32m✓ built in 4.30s[39m
2025-08-26T15:38:45.916253Z	Finished
2025-08-26T15:38:46.876519Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-08-26T15:38:46.877225Z	
2025-08-26T15:38:46.878065Z	Found wrangler.toml file. Reading build configuration...
2025-08-26T15:38:48.011197Z	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2025-08-26T15:38:48.012138Z	Found Functions directory at /functions. Uploading.
2025-08-26T15:38:48.01847Z	 ⛅️ wrangler 3.101.0
2025-08-26T15:38:48.018688Z	-------------------
2025-08-26T15:38:48.980637Z	✨ Compiled Worker successfully
2025-08-26T15:38:50.068226Z	Validating asset output directory
2025-08-26T15:38:53.034318Z	Deploying your site to Cloudflare's global network...
2025-08-26T15:38:55.399118Z	Parsed 0 valid redirect rules.
2025-08-26T15:38:55.399618Z	Found invalid redirect lines:
2025-08-26T15:38:55.399716Z	  - #5: /assets/index-*.css     /assets/index-*.css     200!
2025-08-26T15:38:55.399777Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.399836Z	  - #6: /assets/index-*.js      /assets/index-*.js      200!
2025-08-26T15:38:55.399894Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.399964Z	  - #7: /assets/vendor-*.css    /assets/vendor-*.css    200!
2025-08-26T15:38:55.40002Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400081Z	  - #8: /assets/vendor-*.js     /assets/vendor-*.js     200!
2025-08-26T15:38:55.400137Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400199Z	  - #9: /assets/router-*.css    /assets/router-*.css    200!
2025-08-26T15:38:55.400317Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400387Z	  - #10: /assets/router-*.js     /assets/router-*.js     200!
2025-08-26T15:38:55.400476Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400537Z	  - #11: /assets/*               /assets/*               200!
2025-08-26T15:38:55.400599Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400655Z	  - #14: /robots.txt             /robots.txt             200!
2025-08-26T15:38:55.400715Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400778Z	  - #15: /sitemap.xml            /sitemap.xml            200!
2025-08-26T15:38:55.400833Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.400892Z	  - #16: /IPSLogo-Icon.ico       /IPSLogo-Icon.ico       200!
2025-08-26T15:38:55.400952Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401013Z	  - #17: /IPSLogo.png            /IPSLogo.png            200!
2025-08-26T15:38:55.401069Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401132Z	  - #18: /*.ico                  /*.ico                  200!
2025-08-26T15:38:55.401194Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401253Z	  - #19: /*.png                  /*.png                  200!
2025-08-26T15:38:55.401307Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401359Z	  - #20: /*.jpg                  /*.jpg                  200!
2025-08-26T15:38:55.401488Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401555Z	  - #21: /*.svg                  /*.svg                  200!
2025-08-26T15:38:55.40161Z	    Valid status codes are 200, 301, 302 (default), 303, 307, or 308. Got 200!.
2025-08-26T15:38:55.401664Z	  - #24: /*                      /index.html             200
2025-08-26T15:38:55.401718Z	    Infinite loop detected in this rule and has been ignored. This will cause a redirect to strip `.html` or `/index` and end up triggering this rule again. Please fix or remove this rule to silence this warning.
2025-08-26T15:38:55.401781Z	Parsed 3 valid header rules.
2025-08-26T15:38:55.401838Z	Found invalid header lines:
2025-08-26T15:38:55.4019Z	  - #16:  *.css
2025-08-26T15:38:55.401956Z	    Expected a colon-separated header pair (e.g. name: value)
2025-08-26T15:38:55.40201Z	  - #20:  *.js
2025-08-26T15:38:55.402065Z	    Expected a colon-separated header pair (e.g. name: value)
2025-08-26T15:38:56.748645Z	Uploading... (8/10)
2025-08-26T15:38:57.324013Z	Uploading... (9/10)
2025-08-26T15:38:58.984528Z	Uploading... (10/10)
2025-08-26T15:38:58.984822Z	✨ Success! Uploaded 2 files (8 already uploaded) (2.67 sec)
2025-08-26T15:38:58.984921Z	
2025-08-26T15:38:59.36639Z	✨ Upload complete!
2025-08-26T15:39:03.424778Z	Success: Assets published!
2025-08-26T15:39:05.949564Z	Success: Your site was deployed!