"use strict";
const ts = require("typescript");
const fs = require("fs");

const transformer = context => {
  const visitor = (node) => {

    if (node.kind === ts.SyntaxKind.PropertyAccessExpression) {
      const children = Array.from(node.getChildren());
      if (
        children?.length === 3 &&
        children[0].kind === ts.SyntaxKind.Identifier &&
        children[2].kind === ts.SyntaxKind.Identifier &&
        children[2].getText() === "name"
      ) {
        const name = [...children[0].getText()].reverse().join("");

        console.log(children[0].getText(), name);

        console.log(node.fileName);

        fs.writeFileSync('./output.txt', name, {encoding: 'utf8'})

        return ts.createStringLiteral(name);
      }
    }

    return ts.visitEachChild(node, visitor, context);
  };

  return (node) => ts.visitNode(node, visitor);
};

exports.__esModule = true;
exports["default"] = transformer;
