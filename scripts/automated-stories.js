const fs = require('fs');

const componentPath = 'stencil/components';
const storybookPath = 'stories';

const generateStories = async () => {
    try {
        const files = fs.readdirSync(componentPath);
        for (const file of files) {
          console.warn('file: ', file)
          const componentName = file.split('-')[1];
            // if (file.endsWith('.tsx')) {
                // const componentName = file.replace('.tsx', '');
                const story = `
                    import { withA11y } from '@storybook/addon-a11y';
                    import { html } from 'lit-html';
                    import './${componentName}.tsx';

                    export default {
                      title: '${componentName}',
                      decorators: [withA11y],
                      component: '${componentName}',
                    };

                    export const ${componentName} = () => {
                      return html\`<${componentName}></${componentName}>\`;
                    }
                `;
                 fs.mkdirSync(storybookPath, { recursive: true });
                 fs.writeFileSync(`${storybookPath}/${componentName}.stories.ts`, story);
            // }
        }
        console.log('Stories generated successfully!');
    } catch (error) {
        console.error(error);
    }
};

generateStories();
