const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString} = graphql

const BookType = new GraphQLObjectType({
    nmae:'Book',
    fields:() => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}

    })
})