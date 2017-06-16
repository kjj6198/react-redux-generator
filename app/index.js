const Generator = require('yeoman-generator');

console.log(Generator.extend);

module.exports = Generator.extend({
  writing: function() {
    var sourceRoot = this.sourceRoot();
    var destRoot   = this.destinationRoot();

    this.fs.copy(sourceRoot + '/**/*', destRoot)
    this.fs.copy(sourceRoot + '/**/.*', destRoot)
  }

});
