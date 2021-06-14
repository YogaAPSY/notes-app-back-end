const notesPlugin = require('./notesPlugin');
const Hapi = require('@hapi/hapi')
 
const init = async () => {
  const server = Hapi.server();
  
  // registrasi satu plugin
  await server.register({
    plugin: notesPlugin,
    options: { notes: [] },
  });
 
  await server.start();
};
 
init();