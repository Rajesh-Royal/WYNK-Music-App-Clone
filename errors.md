## You may encounter below errors

- **babel-loader version conflicts due to storybook**

  Solution:

  ```json
  "resolutions": {
      "babel-loader": "8.1.0"
    }
  ```

- **Insert `␍⏎·····`eslintprettier/prettier**

  If you Encounter this error It means there are conflicts between your prettier rules of different plugins.
  - **Quick Workaround**

    Add these lines to the .eslintrc.json file

      ```
      "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto",
            "printWidth": 200,
            "jsxBracketSameLine": true,
          }
      ]
      ```

    These rules are already added, you may change according to your need, also I have disabled to use pritterrc `"usePrettierrc": false`.

- **Postcss plugins conflict**
  - using exact version of this plugin with tailwindcss guide will resolve this error. You must remember that storybook also using **postcss** so the plugin working should comply with storybook and craco both.
  - These links can be helpful
    - [Stackoverflow](https://bit.ly/3fGSNlp)
    - [tailwindcss](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)
