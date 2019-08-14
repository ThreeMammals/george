<?php return [
  'service' => [
    'actions' => [
      'CreateVault' => [
        'request' => [
          'operation' => 'CreateVault',
          'params' => [
            [
              'target' => 'accountId',
              'sourceType' => 'string',
              'source' => '-',
            ],
          ],
        ],
        'resource' => [
          'type' => 'Vault',
          'identifiers' => [
            [
              'target' => 'AccountId',
              'sourceType' => 'requestParameter',
              'source' => 'accountId',
            ],
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'vaultName',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'Vaults' => [
        'request' => [
          'operation' => 'ListVaults',
          'params' => [
            [
              'target' => 'accountId',
              'sourceType' => 'string',
              'source' => '-',
            ],
          ],
        ],
        'resource' => [
          'type' => 'Vault',
          'identifiers' => [
            [
              'target' => 'AccountId',
              'sourceType' => 'requestParameter',
              'source' => 'accountId',
            ],
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'VaultList[].VaultName',
            ],
          ],
          'path' => 'VaultList[]',
        ],
      ],
    ],
  ],
  'resources' => [
    'Account' => [
      'identifiers' => [
        [
          'name' => 'Id',
        ],
      ],
      'actions' => [
        'CreateVault' => [
          'request' => [
            'operation' => 'CreateVault',
          ],
          'resource' => [
            'type' => 'Vault',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'vaultName',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Vaults' => [
          'request' => [
            'operation' => 'ListVaults',
          ],
          'resource' => [
            'type' => 'Vault',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'requestParameter',
                'source' => 'accountId',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'VaultList[].VaultName',
              ],
            ],
            'path' => 'VaultList[]',
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'Vault',
        ],
        'identifiers' => [
          'Id' => 'AccountId',
        ],
      ],
    ],
    'Archive' => [
      'identifiers' => [
        [
          'name' => 'AccountId',
        ],
        [
          'name' => 'VaultName',
        ],
        [
          'name' => 'Id',
        ],
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteArchive',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'archiveId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'InitiateArchiveRetreival' => [
          'request' => [
            'operation' => 'InitiateJob',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'jobParameters.Type',
                'sourceType' => 'string',
                'source' => 'archive-retrieval',
              ],
              [
                'target' => 'jobParameters.ArchiveId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'jobId',
              ],
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'Job' => [
      'identifiers' => [
        [
          'name' => 'AccountId',
        ],
        [
          'name' => 'VaultName',
        ],
        [
          'name' => 'Id',
          'memberName' => 'JobId',
        ],
      ],
      'shape' => 'GlacierJobDescription',
      'load' => [
        'request' => [
          'operation' => 'DescribeJob',
          'params' => [
            [
              'target' => 'accountId',
              'sourceType' => 'identifier',
              'source' => 'AccountId',
            ],
            [
              'target' => 'vaultName',
              'sourceType' => 'identifier',
              'source' => 'VaultName',
            ],
            [
              'target' => 'jobId',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'GetOutput' => [
          'request' => [
            'operation' => 'GetJobOutput',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'jobId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'MultipartUpload' => [
      'identifiers' => [
        [
          'name' => 'AccountId',
        ],
        [
          'name' => 'VaultName',
        ],
        [
          'name' => 'Id',
          'memberName' => 'MultipartUploadId',
        ],
      ],
      'shape' => 'UploadListElement',
      'actions' => [
        'Abort' => [
          'request' => [
            'operation' => 'AbortMultipartUpload',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'uploadId',
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
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'uploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Parts' => [
          'request' => [
            'operation' => 'ListParts',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'uploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'UploadPart' => [
          'request' => [
            'operation' => 'UploadMultipartPart',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
              [
                'target' => 'uploadId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'Notification' => [
      'identifiers' => [
        [
          'name' => 'AccountId',
        ],
        [
          'name' => 'VaultName',
        ],
      ],
      'shape' => 'VaultNotificationConfig',
      'load' => [
        'request' => [
          'operation' => 'GetVaultNotifications',
          'params' => [
            [
              'target' => 'accountId',
              'sourceType' => 'identifier',
              'source' => 'AccountId',
            ],
            [
              'target' => 'vaultName',
              'sourceType' => 'identifier',
              'source' => 'VaultName',
            ],
          ],
        ],
        'path' => 'vaultNotificationConfig',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteVaultNotifications',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
            ],
          ],
        ],
        'Set' => [
          'request' => [
            'operation' => 'SetVaultNotifications',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'VaultName',
              ],
            ],
          ],
        ],
      ],
    ],
    'Vault' => [
      'identifiers' => [
        [
          'name' => 'AccountId',
        ],
        [
          'name' => 'Name',
          'memberName' => 'VaultName',
        ],
      ],
      'shape' => 'DescribeVaultOutput',
      'load' => [
        'request' => [
          'operation' => 'DescribeVault',
          'params' => [
            [
              'target' => 'vaultName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
            [
              'target' => 'accountId',
              'sourceType' => 'identifier',
              'source' => 'AccountId',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Create' => [
          'request' => [
            'operation' => 'CreateVault',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteVault',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
            ],
          ],
        ],
        'InitiateInventoryRetrieval' => [
          'request' => [
            'operation' => 'InitiateJob',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'jobParameters.Type',
                'sourceType' => 'string',
                'source' => 'inventory-retrieval',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'jobId',
              ],
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'InitiateMultipartUpload' => [
          'request' => [
            'operation' => 'InitiateMultipartUpload',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MultipartUpload',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'uploadId',
              ],
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'UploadArchive' => [
          'request' => [
            'operation' => 'UploadArchive',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Archive',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'archiveId',
              ],
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'CompletedJobs' => [
          'request' => [
            'operation' => 'ListJobs',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'completed',
                'sourceType' => 'string',
                'source' => 'true',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'JobList[].JobId',
              ],
            ],
            'path' => 'JobList[]',
          ],
        ],
        'FailedJobs' => [
          'request' => [
            'operation' => 'ListJobs',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'statuscode',
                'sourceType' => 'string',
                'source' => 'Failed',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'JobList[].JobId',
              ],
            ],
            'path' => 'JobList[]',
          ],
        ],
        'Jobs' => [
          'request' => [
            'operation' => 'ListJobs',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'JobList[].JobId',
              ],
            ],
            'path' => 'JobList[]',
          ],
        ],
        'JobsInProgress' => [
          'request' => [
            'operation' => 'ListJobs',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'statuscode',
                'sourceType' => 'string',
                'source' => 'InProgress',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'JobList[].JobId',
              ],
            ],
            'path' => 'JobList[]',
          ],
        ],
        'MultipartUplaods' => [
          'request' => [
            'operation' => 'ListMultipartUploads',
            'params' => [
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MultipartUpload',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'UploadsList[].MultipartUploadId',
              ],
            ],
            'path' => 'UploadsList[]',
          ],
        ],
        'SucceededJobs' => [
          'request' => [
            'operation' => 'ListJobs',
            'params' => [
              [
                'target' => 'accountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'vaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'statuscode',
                'sourceType' => 'string',
                'source' => 'Succeeded',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Job',
            'identifiers' => [
              [
                'target' => 'AccountId',
                'sourceType' => 'identifier',
                'source' => 'AccountId',
              ],
              [
                'target' => 'VaultName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'JobList[].JobId',
              ],
            ],
            'path' => 'JobList[]',
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'Notification',
          'Job',
          'Archive',
          'MultipartUpload',
        ],
        'identifiers' => [
          'AccountId' => 'AccountId',
          'Name' => 'VaultName',
        ],
      ],
    ],
  ],
];
