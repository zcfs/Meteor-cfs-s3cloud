Package.describe({
  name: 'cfs:s3cloud',
  version: '0.0.8',
  summary: 'CollectionFS, S3 Cloud Storage Adapter',
  git: 'https://github.com/CollectionFS/Meteor-cfs-s3cloud.git'
});

// Npm.depends({
//   mime: "1.2.11",
//   temp: "0.6.0"
// });

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Rig the collectionFS package v2
  api.imply([
    // Base util rigs the basis for the FS scope and some general helper mehtods
    'cfs:base-package@0.0.27',
    // Transfer is basically the up and download queues via ddp
    'cfs:transfer@0.0.16',
    // Want to make use of the file object and its api, yes!
    'cfs:file@0.1.15',
    // Add the FS.Collection to keep track of everything
    'cfs:collection@0.5.2',
    // Add the option to have ddp and http access point
    'cfs:access-point@0.1.43',
    // We might also want to have the server create copies of our files?
    'cfs:worker@0.1.2',
  ]);



  // api.use(['deps', 'underscore', 'check', 'livedata', 'mongo-livedata',
  //   'ejson', 'http-methods', 'reactive-list', 'micro-queue', 'power-queue']);

  // // Make a weak dependency to support Join for joining data
  // api.use(['join'], { weak: true }); // Move to cfs-collection

  // if (api.export) {
  //   api.export('FS');
  // }

  // api.add_files([
  //   'FileSaver.js',
  //   'generalCode/shared.js',
  //   'codeUtilities/argParser.js',
  //   'transfer/downloadTransferQueue.js',
  //   'transfer/uploadTransferQueue.js',
  //   'fsFile/fsFile-common.js',
  //   'fsFile/fsFile-data-get.js',
  //   'fsFile/fsFile-data-set.js',
  //   'fsFile/fsFile-client.js',
  //   'fsFile/fsFile-ejson.js',
  //   'fsStorageAdapter/storageAdapter.client.js',
  //   'fsCollection/common.js',
  //   'fsCollection/api.common.js',
  //   'fsCollection/api.client.js'
  // ], 'client');

  // api.add_files([
  //   'generalCode/shared.js',
  //   'codeUtilities/argParser.js',
  //   'fsFile/fsFile-common.js',
  //   'fsFile/fsFile-data-get.js',
  //   'fsFile/fsFile-data-set.js',
  //   'fsFile/fsFile-server.js',
  //   'fsFile/fsFile-ejson.js',
  //   'fsStorageAdapter/storageAdapter.server.js',
  //   'tempStore.js',
  //   'fsAccessPoint/accessPoint.js',
  //   'fsCollection/common.js',
  //   'fsCollection/api.common.js',
  //   'fsCollection/api.server.js',
  //   'fsWorker/fileWorker.js'
  // ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.add_files('tests/client-tests.js', 'server');
//   api.add_files('tests/server-tests.js', 'client');
// });
