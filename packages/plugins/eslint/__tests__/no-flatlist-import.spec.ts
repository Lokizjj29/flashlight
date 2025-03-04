import { ESLintUtils } from "@typescript-eslint/utils";
import { rule } from "../rules/no-flatlist-import";

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("{RULE_NAME}", rule, {
  valid: [
    `import { FlashList } from "@shopify/flash-list";`,
    `import { View } from 'react-native';`,
    `import * as ReactNative from 'react-native';`,
  ],
  invalid: [
    {
      code: `import { FlatList } from 'react-native';`,
      errors: [{ messageId: "no-flatlist-import" }],
    },
    {
      code: `import { SectionList } from 'react-native';`,
      errors: [{ messageId: "no-flatlist-import" }],
    },
  ],
});
