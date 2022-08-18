// const transformer = require('./transformer').default;
const path = require('path');
const fs = require('fs');
const { ModifySourcePlugin } = require('modify-source-webpack-plugin');

module.exports = {
  module: {
    // rules: [
    //   {
    //     test: /\.ts$/,
    //     use: {
    //       loader: 'ts-loader',
    //       options: {
    //         getCustomTransformers: path.join(__dirname, './transformers.js')
    //       }
    //     }
    //   }
    // ],
  },
  plugins: [
    new ModifySourcePlugin({
      rules: [
        {
          test: /\*.ts$/,
          modify: src => {
            console.log(src);
            fs.writeFileSync('output.txt', src, { encoding: 'utf8' });
            return src.replaceAll('AppComponent.name', '"AppLolPonent"');
          }
        }
      ]
    })
  ]
};
