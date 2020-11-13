import general from './zhTW-general.json';
import authorization from './zhTw-authorization.json';
import home from './zhTW-home.json';
import room from './zhTW-room.json';
import navigation from './zhTw-navigation.json';
import userConfig from './zhTW-userConfig.json';
import notReady from './zhTw-notReady.json';

export default {
    ...general,
    ...authorization,
    ...home,
    ...room,
    ...navigation,
    ...userConfig,
    ...notReady,
} as any;
