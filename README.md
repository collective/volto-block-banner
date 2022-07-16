# volto-block-banner

A [volto](https://plone.org/what-is-plone/volto) [block](https://6.dev-docs.plone.org/volto/blocks/index.html) [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) for a banner. It contains two sub-elements:

1. `Text`: The display text of the banner.
1. `CTA-Button`: Call to action button.

## Customizable properties

<details>
  <summary>Click to expand!</summary>

1. `text` (_string_): Main text or the heading of the banner.
1. `showActionButton` (_boolean_): Toggle the `CTA-Button`.
1. `actionButtonText` (_string_): `CTA-Button` label.
1. `actionButtonUrl` (_string_): `CTA-Button` _URL_ which is navigated onClick.
1. `backgroundColor` (_string_): Specifies the `backgroundColor` css property for the banner.
1. `textColor` (_string_): Specifies the `color` css property for `Text`.
1. `showCircle` (_boolean_): Toggle the orange circle background design.
1. `marginBottom` (_string_): Specifies the `margin-bottom` css property of the banner.

</details>

## Example

### Configuration

```txt
text: 'This is a Banner!! Put your message here!'
showActionButton: true
actionButtonText: 'Take Action'
actionButtonUrl: /
backgroundColor: #2b4eff
textColor: #ffffff
showCircle: true
marginBottom: 15px
```

### Output

![image](/assets/github/preview.png)
