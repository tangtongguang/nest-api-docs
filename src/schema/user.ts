
import { red } from 'chalk';
import { generate, addMin } from '../jsf/utils';


/**
 * years 
 */
export const schema: jsf.Schema = {
  type: 'array',
  items: {
    type: 'object',
    required: [
      'years',//["2004-05-07T21:57:57.506Z","2004-05-07T21:58:26.882Z"]
      'year',//1939
      'pattern',//yes|no
      'date',
      'faker',
      'fixedValues',
      'positiveInt'
    ],
    properties: {
      years: {
        type: 'array',
        items: {
          type: 'string',

          sequentialDate: 'minutes',

        },
        minItems: 2,
        maxItems: 2

      },
      year: {
        type: 'string',
        chance: {
          year: {
            min: 1939,
            max: 1940
          }
        }
      },
      pattern: {
        type: 'string',
        pattern: 'yes|no'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      faker: {
        type: 'string',
        faker: {
          fake: "{{name.lastName}},{{name.suffix}}"
        }
      },
      danamicValues: {
        type: 'array',
        items:
          { type: 'integer', initialOffset: 100, autoIncrement: true }
        ,
        minItems: 1,
        maxItems: 1
      },
      fixedValues: {
        type: 'array',
        items: [
          { type: 'integer', minimum: 0, maximum: 1, exclusiveMinimum: 0 }
        ]
      },
      positiveInt: {
        type: 'integer',
        minimum: 0,
        maximum: 1,
        exclusiveMinimum: true
      },
      id: {
        type: 'object',
        chance: "user"
      },
      url: {
        type: 'string',
        faker: 'address.city'
      },
      ref: {
        $ref: 'otherSchema'
      },
      ser: {
        type: 'string',
        format: 'semver'
      }

    }
  }
}

export interface User {
  id: string,
  url: string,
  name: string
}

export const genUsers = async (num?: number): Promise<User[]> => {
  const data = await generate(addMin(schema, num))

  console.log(
    red(JSON.stringify(data[0], null, 2)))
  return data;
}
