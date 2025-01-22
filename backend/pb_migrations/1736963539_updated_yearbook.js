/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3857087988")

  // update collection data
  unmarshal({
    "name": "animals"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3857087988")

  // update collection data
  unmarshal({
    "name": "yearbook"
  }, collection)

  return app.save(collection)
})
