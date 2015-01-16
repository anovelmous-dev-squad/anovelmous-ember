/**
 * Created by Tim Martin on 1/15/15.
 */
import Ember from 'ember';

export default Ember.ArrayController.extend({
    indexedModel: function(){
        var modelLength = this.get('model.length');
        console.log(modelLength);
        var something = this.get('model').map(function(model, index){
            var first = (index === 0);
            var last = (index === (modelLength - 1));
            return { model: model, index: index, first: first, last: last };
        });
        console.log(something);
        return something;
    }.property('model.@each')
});