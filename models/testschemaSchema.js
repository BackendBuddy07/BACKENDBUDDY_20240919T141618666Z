const mongoose = require('mongoose');

const TestSchemaSchema = new mongoose.Schema(
{
    Field1: { 
        type: String,
        required: true,
        unique: false
    },
Field2 : [
{ 
  
   Field3: { 
        type: String,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('TestSchema', TestSchemaSchema);
