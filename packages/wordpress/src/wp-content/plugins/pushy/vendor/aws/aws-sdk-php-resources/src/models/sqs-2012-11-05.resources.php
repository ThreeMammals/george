<?php return [
  'service' => [
    'actions' => [
      'CreateQueue' => [
        'request' => [
          'operation' => 'CreateQueue',
        ],
        'resource' => [
          'type' => 'Queue',
          'identifiers' => [
            [
              'target' => 'Url',
              'sourceType' => 'responsePath',
              'source' => 'QueueUrl',
            ],
          ],
        ],
      ],
      'GetQueueByName' => [
        'request' => [
          'operation' => 'GetQueueUrl',
        ],
        'resource' => [
          'type' => 'Queue',
          'identifiers' => [
            [
              'target' => 'Url',
              'sourceType' => 'responsePath',
              'source' => 'QueueUrl',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'Queues' => [
        'request' => [
          'operation' => 'ListQueues',
        ],
        'resource' => [
          'type' => 'Queue',
          'identifiers' => [
            [
              'target' => 'Url',
              'sourceType' => 'responsePath',
              'source' => 'QueueUrls[]',
            ],
          ],
        ],
      ],
    ],
  ],
  'resources' => [
    'Message' => [
      'identifiers' => [
        [
          'name' => 'QueueUrl',
        ],
        [
          'name' => 'ReceiptHandle',
          'memberName' => 'ReceiptHandle',
        ],
      ],
      'shape' => 'Message',
      'actions' => [
        'ChangeVisibility' => [
          'request' => [
            'operation' => 'ChangeMessageVisibility',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'QueueUrl',
              ],
              [
                'target' => 'ReceiptHandle',
                'sourceType' => 'identifier',
                'source' => 'ReceiptHandle',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteMessage',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'QueueUrl',
              ],
              [
                'target' => 'ReceiptHandle',
                'sourceType' => 'identifier',
                'source' => 'ReceiptHandle',
              ],
            ],
          ],
        ],
      ],
      'batchActions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteMessageBatch',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'QueueUrl',
              ],
              [
                'target' => 'Entries[*].Id',
                'sourceType' => 'dataMember',
                'source' => 'MessageId',
              ],
              [
                'target' => 'Entries[*].ReceiptHandle',
                'sourceType' => 'identifier',
                'source' => 'ReceiptHandle',
              ],
            ],
          ],
        ],
      ],
    ],
    'Queue' => [
      'identifiers' => [
        [
          'name' => 'Url',
        ],
      ],
      'shape' => 'GetQueueAttributesResult',
      'load' => [
        'request' => [
          'operation' => 'GetQueueAttributes',
          'params' => [
            [
              'target' => 'QueueUrl',
              'sourceType' => 'identifier',
              'source' => 'Url',
            ],
            [
              'target' => 'AttributeNames[]',
              'sourceType' => 'string',
              'source' => 'All',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'AddPermission' => [
          'request' => [
            'operation' => 'AddPermission',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'ChangeMessageVisibilityBatch' => [
          'request' => [
            'operation' => 'ChangeMessageVisibilityBatch',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteQueue',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'DeleteMessages' => [
          'request' => [
            'operation' => 'DeleteMessageBatch',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'ReceiveMessages' => [
          'request' => [
            'operation' => 'ReceiveMessage',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Message',
            'identifiers' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
              [
                'target' => 'ReceiptHandle',
                'sourceType' => 'responsePath',
                'source' => 'Messages[].ReceiptHandle',
              ],
            ],
            'path' => 'Messages[]',
          ],
        ],
        'RemovePermission' => [
          'request' => [
            'operation' => 'RemovePermission',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'SendMessage' => [
          'request' => [
            'operation' => 'SendMessage',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'SendMessages' => [
          'request' => [
            'operation' => 'SendMessageBatch',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
        'SetAttributes' => [
          'request' => [
            'operation' => 'SetQueueAttributes',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'Message',
        ],
        'identifiers' => [
          'Url' => 'QueueUrl',
        ],
      ],
      'hasMany' => [
        'DeadLetterSourceQueues' => [
          'request' => [
            'operation' => 'ListDeadLetterSourceQueues',
            'params' => [
              [
                'target' => 'QueueUrl',
                'sourceType' => 'identifier',
                'source' => 'Url',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Queue',
            'identifiers' => [
              [
                'target' => 'Url',
                'sourceType' => 'responsePath',
                'source' => 'QueueUrls[]',
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
