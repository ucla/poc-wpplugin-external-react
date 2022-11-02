# PROOFS of CONCEPT - UCLA WCL Blocks WPPlugin
* Contributors: UCLA Strategic Communications Development Department / [esat@stratcomm.ucla.edu](mailto:esat@stratcomm.ucla.edu)


## == Proof of Concept Objective  ==
Objectives and findings are well documented in the draft statement of work found here: https://docs.google.com/document/d/1yfBaJrOfMidvoeFCXxHJiUc2WJYmrrY04LlNQU-8cEI/edit?pli=1#.

Additionally, **please read comments** in each of the block files for additional details.

### **IMPORTANT:** Proofs of concept are executed in order to fully understand potential paths forward and are **not** indicative of concreate decisions or recommendations.

1. To discover any differences in block plugin development methodologies that may exist between the current build platform and the latest available platform.

2.  Determine if external React components can be consumed by WordPress React blocks in order to reduce the number of instances where WCL markup is maintained and to benefit from the fact that WordPress is already using React in the Gutenberg editor. (See the accordion component '/src/blocks/accordion')
    2a. Determine if the same component can be loaded on from front-end. It was determined that this is possible using the viewScript. ('/src/blocks/accordion/view.js')
    
    Finding: As of version 6.0, WordPress delivers the markup output of the React component as static HTML by default. If the component is interactive, e.g., the accordion component,
    a ‘viewScript’ can be written to convert the static component to React on the front-end thereby leveraging the existing state-based React component interactivity or by using the
    vanilla JavaScript from the HTML version of the WCL component in the ‘viewScript’. **SEO** is not affected by loading a React Component through the viewScript because it occurs after
    page load and is executed by the browser JavaScript engine. Crawlers ingest the static version of the component as loaded by the WordPress engine as is done today.

3. To determine if page templates can be delivered through a plugin without being coupled with a theme. By making all blocks and the default WCL header and footer (molecule/block pattern) available as blocks and page templates through a plugin, site administrators would have the flexibility of using a theme of their own choosing. This could increase adoption of the web component library and simplify administration and code maintenance.


## == Note ==
The WCL React components would ordinarily be located under the node_modules folder and added
through the repository referenced in the package.json just like the current WCL repo is included in the current plugin. To make it easier for the POC I
moved the React POC folder ('wcl-react-poc') to the root of the project folder so that I could save it to the POC repo.
The package JSON references the repo for the POC so that NPM would not delete the folder during testing. 

## == To Run ==
1. Download a zip of the code from GitHub and unzip in a local development folder, e.g., '/sites/sandbox/', etc.

2. Follow the instructions here: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/

3. Activate the POC plugin in the WordPress admin console.

4. Add the accordion block to a page and save the page.

5. Refresh the editor page to see that the block that was added with no console errors.

6. View the published page and note that the accordion operates correctly. The component on the front-end is now React. Again, the main purpose of this POC was to see if WordPress blocks could consumed
externally sourced React components. Determining if React could be loaded on the front-end was secondary. Again, SEO is not affected. See notes in '/src/blocks/accordion/view.js'