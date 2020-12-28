import * as jsf from 'json-schema-faker';
import * as faker from 'faker';
import * as Chance from 'chance'
import register from './formats'
jsf.extend('faker', () => {
  return faker;
})
jsf.option({ useExamplesValue: true })
register(jsf);
export default jsf.extend('chance', () => {
  let chance = new Chance();
  chance.mixin({
    'user': function () {
      return {
        first: chance.first()
      }

    }
  })


  //faker.locale = 'zh_CN'
  return chance;
})
