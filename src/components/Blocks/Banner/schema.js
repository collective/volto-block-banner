export default () => ({
  title: 'Banner',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'text',
        'showActionButton',
        'actionButtonText',
        'actionButtonUrl',
        'backgroundColor',
        'textColor',
        'showCircle',
        'marginBottom',
      ],
    },
  ],
  properties: {
    text: {
      title: 'Text',
      type: 'string',
    },
    showActionButton: {
      title: 'Enable Button',
      type: 'boolean',
    },
    actionButtonText: {
      title: 'Button text',
      type: 'string',
    },
    actionButtonUrl: {
      title: 'Button redirect url',
      type: 'string',
    },
    backgroundColor: {
      title: 'Background Color',
      type: 'string',
    },
    textColor: {
      title: 'Text Color',
      type: 'string',
    },
    showCircle: {
      title: 'Enable Circle Background',
      type: 'boolean',
    },
    marginBottom: {
      title: 'margin-bottom',
      type: 'string',
    },
  },
  required: [],
});
