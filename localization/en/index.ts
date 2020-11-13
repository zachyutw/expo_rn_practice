import general from './en-general.json';
import authorization from './en-authorization.json';
import home from './en-home.json';
import room from './en-room.json';
import navigation from './en-navigation.json';
import userConfig from './en-userConfig.json';
import notReady from './en-notReady.json';

export default {
    ...general,
    ...authorization,
    ...home,
    ...room,
    ...navigation,
    ...userConfig,
    ...notReady,
} as any;
