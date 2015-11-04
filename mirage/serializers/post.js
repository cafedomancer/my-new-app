import BaseSerializer from './application';

export default BaseSerializer.extend({
    relationships: ['author', 'comments']
});
