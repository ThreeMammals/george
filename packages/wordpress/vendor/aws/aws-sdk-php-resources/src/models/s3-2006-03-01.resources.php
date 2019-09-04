<?php return [
  'service' => [
    'actions' => [
      'CreateBucket' => [
        'request' => [
          'operation' => 'CreateBucket',
        ],
        'resource' => [
          'type' => 'Bucket',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'Bucket',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'Buckets' => [
        'request' => [
          'operation' => 'ListBuckets',
        ],
        'resource' => [
          'type' => 'Bucket',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'Buckets[].Name',
            ],
          ],
          'path' => 'Buckets[]',
        ],
      ],
    ],
  ],
  'resources' => [
    'Bucket' => [
      'identifiers' => [
        [
          'name' => 'Name',
        ],
      ],
      'shape' => 'Bucket',
      'actions' => [
        'Create' => [
          'request' => [
            'operation' => 'CreateBucket',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucket',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'DeleteObjects' => [
          'request' => [
            'operation' => 'DeleteObjects',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'PutObject' => [
          'request' => [
            'operation' => 'PutObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Object',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Key',
              ],
            ],
          ],
        ],
      ],
      'waiters' => [
        'Exists' => [
          'waiterName' => 'BucketExists',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'NotExists' => [
          'waiterName' => 'BucketNotExists',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
      ],
      'hasMany' => [
        'MultipartUploads' => [
          'request' => [
            'operation' => 'ListMultipartUploads',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MultipartUpload',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'ObjectKey',
                'sourceType' => 'responsePath',
                'source' => 'Uploads[].Key',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Uploads[].UploadId',
              ],
            ],
            'path' => 'Uploads[]',
          ],
        ],
        'ObjectVersions' => [
          'request' => [
            'operation' => 'ListObjectVersions',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'ObjectVersion',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'ObjectKey',
                'sourceType' => 'responsePath',
                'source' => '[Versions,DeleteMarkers]|[].Key',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => '[Versions,DeleteMarkers]|[].VersionId',
              ],
            ],
            'path' => '[Versions,DeleteMarkers]|[]',
          ],
        ],
        'Objects' => [
          'request' => [
            'operation' => 'ListObjects',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Object',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'responsePath',
                'source' => 'Contents[].Key',
              ],
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'BucketAcl',
          'BucketCors',
          'BucketLifecycle',
          'BucketLogging',
          'BucketPolicy',
          'BucketNotification',
          'BucketRequestPayment',
          'BucketTagging',
          'BucketVersioning',
          'BucketWebsite',
          'Object',
        ],
        'identifiers' => [
          'Name' => 'BucketName',
        ],
      ],
    ],
    'BucketAcl' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketAclOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketAcl',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Put' => [
          'request' => [
            'operation' => 'PutBucketAcl',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketCors' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketCorsOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketCors',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucketCors',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketCors',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketLifecycle' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketLifecycleOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketLifecycle',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucketLifecycle',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketLifecycle',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketLogging' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketLoggingOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketLogging',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Put' => [
          'request' => [
            'operation' => 'PutBucketLogging',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketNotification' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketNotificationOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketNotification',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Put' => [
          'request' => [
            'operation' => 'PutBucketNotification',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketPolicy' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketPolicyOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketPolicy',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucketPolicy',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketPolicy',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketRequestPayment' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketRequestPaymentOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketRequestPayment',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Put' => [
          'request' => [
            'operation' => 'PutBucketRequestPayment',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketTagging' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketTaggingOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketTagging',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucketTagging',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketTagging',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketVersioning' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketVersioningOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketVersioning',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Enable' => [
          'request' => [
            'operation' => 'PutBucketVersioning',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'VersioningConfiguration.Status',
                'sourceType' => 'string',
                'source' => 'Enabled',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketVersioning',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Suspend' => [
          'request' => [
            'operation' => 'PutBucketVersioning',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'VersioningConfiguration.Status',
                'sourceType' => 'string',
                'source' => 'Suspended',
              ],
            ],
          ],
        ],
      ],
    ],
    'BucketWebsite' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
      ],
      'shape' => 'GetBucketWebsiteOutput',
      'load' => [
        'request' => [
          'operation' => 'GetBucketWebsite',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteBucketWebsite',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutBucketWebsite',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
            ],
          ],
        ],
      ],
    ],
    'MultipartUpload' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
        [
          'name' => 'ObjectKey',
        ],
        [
          'name' => 'Id',
        ],
      ],
      'shape' => 'MultipartUpload',
      'actions' => [
        'Abort' => [
          'request' => [
            'operation' => 'AbortMultipartUpload',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'UploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Complete' => [
          'request' => [
            'operation' => 'CompleteMultipartUpload',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'UploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Object',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Parts' => [
          'request' => [
            'operation' => 'ListParts',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'UploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MultipartUploadPart',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'requestParameter',
                'source' => 'Bucket',
              ],
              [
                'target' => 'ObjectKey',
                'sourceType' => 'requestParameter',
                'source' => 'Key',
              ],
              [
                'target' => 'MultipartUploadId',
                'sourceType' => 'requestParameter',
                'source' => 'UploadId',
              ],
              [
                'target' => 'PartNumber',
                'sourceType' => 'responsePath',
                'source' => 'Parts[].PartNumber',
              ],
            ],
            'path' => 'Parts[]',
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'MultipartUploadPart',
        ],
        'identifiers' => [
          'BucketName' => 'BucketName',
          'Id' => 'MultipartUploadId',
          'ObjectKey' => 'ObjectKey',
        ],
      ],
    ],
    'MultipartUploadPart' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
        [
          'name' => 'ObjectKey',
        ],
        [
          'name' => 'MultipartUploadId',
        ],
        [
          'name' => 'PartNumber',
          'type' => 'integer',
          'memberName' => 'PartNumber',
        ],
      ],
      'shape' => 'Part',
      'actions' => [
        'CopyFrom' => [
          'request' => [
            'operation' => 'UploadPartCopy',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'UploadId',
                'sourceType' => 'identifier',
                'source' => 'MultipartUploadId',
              ],
              [
                'target' => 'PartNumber',
                'sourceType' => 'identifier',
                'source' => 'PartNumber',
              ],
            ],
          ],
        ],
        'Upload' => [
          'request' => [
            'operation' => 'UploadPart',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'UploadId',
                'sourceType' => 'identifier',
                'source' => 'MultipartUploadId',
              ],
              [
                'target' => 'PartNumber',
                'sourceType' => 'identifier',
                'source' => 'PartNumber',
              ],
            ],
          ],
        ],
      ],
    ],
    'Object' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
        [
          'name' => 'Key',
        ],
      ],
      'shape' => 'HeadObjectOutput',
      'load' => [
        'request' => [
          'operation' => 'HeadObject',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
            [
              'target' => 'Key',
              'sourceType' => 'identifier',
              'source' => 'Key',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'CopyFrom' => [
          'request' => [
            'operation' => 'CopyObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
        ],
        'Get' => [
          'request' => [
            'operation' => 'GetObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
        ],
        'InitiateMultipartUpload' => [
          'request' => [
            'operation' => 'CreateMultipartUpload',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MultipartUpload',
            'identifiers' => [
              [
                'target' => 'BucketName',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'ObjectKey',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'UploadId',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
        ],
      ],
      'batchActions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteObjects',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Delete.Objects[].Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
            ],
          ],
        ],
      ],
      'waiters' => [
        'Exists' => [
          'waiterName' => 'ObjectExists',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
            [
              'target' => 'Key',
              'sourceType' => 'identifier',
              'source' => 'Key',
            ],
          ],
        ],
        'NotExists' => [
          'waiterName' => 'ObjectNotExists',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
            [
              'target' => 'Key',
              'sourceType' => 'identifier',
              'source' => 'Key',
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'ObjectAcl',
          'ObjectVersion',
          'MultipartUpload',
        ],
        'identifiers' => [
          'BucketName' => 'BucketName',
          'Key' => 'ObjectKey',
        ],
      ],
    ],
    'ObjectAcl' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
        [
          'name' => 'ObjectKey',
        ],
      ],
      'shape' => 'GetObjectAclOutput',
      'load' => [
        'request' => [
          'operation' => 'GetObjectAcl',
          'params' => [
            [
              'target' => 'Bucket',
              'sourceType' => 'identifier',
              'source' => 'BucketName',
            ],
            [
              'target' => 'Key',
              'sourceType' => 'identifier',
              'source' => 'ObjectKey',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Put' => [
          'request' => [
            'operation' => 'PutObjectAcl',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
            ],
          ],
        ],
      ],
    ],
    'ObjectVersion' => [
      'identifiers' => [
        [
          'name' => 'BucketName',
        ],
        [
          'name' => 'ObjectKey',
        ],
        [
          'name' => 'Id',
        ],
      ],
      'shape' => 'ObjectVersion',
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'VersionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Get' => [
          'request' => [
            'operation' => 'GetObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'VersionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Head' => [
          'request' => [
            'operation' => 'HeadObject',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'VersionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'batchActions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteObjects',
            'params' => [
              [
                'target' => 'Bucket',
                'sourceType' => 'identifier',
                'source' => 'BucketName',
              ],
              [
                'target' => 'Delete.Objects[*].Key',
                'sourceType' => 'identifier',
                'source' => 'ObjectKey',
              ],
              [
                'target' => 'Delete.Objects[*].VersionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
