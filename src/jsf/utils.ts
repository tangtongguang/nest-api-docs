import jsf from '.'
import refs from './ref';


const generate = async (schema: any): Promise<any[]> => {
  return await jsf.resolve(schema, refs);
};

const addMin = (schema: any, num?: number) => {
  /**
   * @param {num}: Number of fake data objects that will be generated
   * @return: the original schema with minItems and maxItems properties added.
   */

  // Setting minItems tells generator to create specified number of items
  schema.minItems = num || 5; // Default 5
  schema.maxItems = num || 5;

  return schema;
};

export {
  generate,
  addMin
}