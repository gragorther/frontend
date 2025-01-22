/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3857087988")

  // remove field
  collection.fields.removeById("relation1542800728")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3981121951",
    "maxSelect": 1,
    "name": "class",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "mammal",
      "fish"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3857087988")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_638429044",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("select3981121951")

  return app.save(collection)
})
