import config from 'config';
import secret from 'secret';

export function get(type, property) {
  const override = config.get('override-properties') === 'true';
  switch (type) {
    case 'config':
      return override ? config.get('config.' + property) : config.get(property);
    case 'secret':
      return override ? config.get('secret.' + property) : secret.get(property);
    default:
      throw 'Unrecognized type: ' + type;
  }
}
