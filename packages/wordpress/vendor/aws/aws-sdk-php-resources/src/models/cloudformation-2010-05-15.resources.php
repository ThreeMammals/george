<?php return [
  'service' => [
    'actions' => [
      'CreateStack' => [
        'request' => [
          'operation' => 'CreateStack',
        ],
        'resource' => [
          'type' => 'Stack',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'StackName',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'Stacks' => [
        'request' => [
          'operation' => 'DescribeStacks',
        ],
        'resource' => [
          'type' => 'Stack',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'Stacks[].StackName',
            ],
          ],
        ],
      ],
    ],
  ],
  'resources' => [
    'Event' => [
      'identifiers' => [
        [
          'name' => 'Id',
        ],
      ],
      'shape' => 'StackEvent',
    ],
    'Stack' => [
      'identifiers' => [
        [
          'name' => 'Name',
        ],
      ],
      'shape' => 'Stack',
      'load' => [
        'request' => [
          'operation' => 'DescribeStacks',
          'params' => [
            [
              'target' => 'StackName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'Stacks[0]',
      ],
      'actions' => [
        'CancelUpdate' => [
          'request' => [
            'operation' => 'CancelUpdateStack',
            'params' => [
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteStack',
            'params' => [
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateStack',
            'params' => [
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Events' => [
          'request' => [
            'operation' => 'DescribeStackEvents',
            'params' => [
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Event',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'StackEvents[].EventId',
              ],
            ],
            'path' => 'StackEvents[]',
          ],
        ],
        'ResourceSummaries' => [
          'request' => [
            'operation' => 'ListStackResources',
            'params' => [
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'StackResourceSummary',
            'identifiers' => [
              [
                'target' => 'LogicalId',
                'sourceType' => 'responsePath',
                'source' => 'StackResourceSummaries[].LogicalResourceId',
              ],
              [
                'target' => 'StackName',
                'sourceType' => 'requestParameter',
                'source' => 'StackName',
              ],
            ],
            'path' => 'StackResourceSummaries[]',
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'StackResource',
        ],
        'identifiers' => [
          'Name' => 'StackName',
        ],
      ],
    ],
    'StackResource' => [
      'identifiers' => [
        [
          'name' => 'LogicalId',
        ],
        [
          'name' => 'StackName',
        ],
      ],
      'shape' => 'StackResourceDetail',
      'load' => [
        'request' => [
          'operation' => 'DescribeStackResource',
          'params' => [
            [
              'target' => 'LogicalResourceId',
              'sourceType' => 'identifier',
              'source' => 'LogicalId',
            ],
            [
              'target' => 'StackName',
              'sourceType' => 'identifier',
              'source' => 'StackName',
            ],
          ],
        ],
        'path' => 'StackResourceDetail',
      ],
    ],
    'StackResourceSummary' => [
      'identifiers' => [
        [
          'name' => 'LogicalId',
        ],
        [
          'name' => 'StackName',
        ],
      ],
      'shape' => 'StackResourceSummary',
      'belongsTo' => [
        'Resource' => [
          'resource' => [
            'type' => 'StackResource',
            'identifiers' => [
              [
                'target' => 'LogicalId',
                'sourceType' => 'identifier',
                'source' => 'LogicalId',
              ],
              [
                'target' => 'StackName',
                'sourceType' => 'identifier',
                'source' => 'StackName',
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
