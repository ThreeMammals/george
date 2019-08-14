<?php return [
  'service' => [
    'actions' => [
      'CreatePlatformApplication' => [
        'request' => [
          'operation' => 'CreatePlatformApplication',
        ],
        'resource' => [
          'type' => 'PlatformApplication',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'PlatformApplicationArn',
            ],
          ],
        ],
      ],
      'CreateTopic' => [
        'request' => [
          'operation' => 'CreateTopic',
        ],
        'resource' => [
          'type' => 'Topic',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'TopicArn',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'PlatformApplications' => [
        'request' => [
          'operation' => 'ListPlatformApplications',
        ],
        'resource' => [
          'type' => 'PlatformApplication',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'PlatformApplications[].PlatformApplicationArn',
            ],
          ],
        ],
      ],
      'Subscriptions' => [
        'request' => [
          'operation' => 'ListSubscriptions',
        ],
        'resource' => [
          'type' => 'Subscription',
          'identifiers' => [
            [
              'target' => 'TopicArn',
              'sourceType' => 'responsePath',
              'source' => 'Subscriptions[].TopicArn',
            ],
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'Subscriptions[].SubscriptionArn',
            ],
          ],
        ],
      ],
      'Topics' => [
        'request' => [
          'operation' => 'ListTopics',
        ],
        'resource' => [
          'type' => 'Topic',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'Topics[].TopicArn',
            ],
          ],
        ],
      ],
    ],
  ],
  'resources' => [
    'PlatformApplication' => [
      'identifiers' => [
        [
          'name' => 'Arn',
        ],
      ],
      'shape' => 'GetPlatformApplicationAttributesResponse',
      'load' => [
        'request' => [
          'operation' => 'GetPlatformApplicationAttributes',
          'params' => [
            [
              'target' => 'PlatformApplicationArn',
              'sourceType' => 'identifier',
              'source' => 'Arn',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'CreatePlatformEndpoint' => [
          'request' => [
            'operation' => 'CreatePlatformEndpoint',
            'params' => [
              [
                'target' => 'PlatformApplicationArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
          'resource' => [
            'type' => 'PlatformEndpoint',
            'identifiers' => [
              [
                'target' => 'PlatformApplicationArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
              [
                'target' => 'Arn',
                'sourceType' => 'responsePath',
                'source' => 'EndpointArn',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeletePlatformApplication',
            'params' => [
              [
                'target' => 'PlatformApplicationArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'SetAttributes' => [
          'request' => [
            'operation' => 'SetPlatformApplicationAttributes',
            'params' => [
              [
                'target' => 'PlatformApplicationArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Endpoints' => [
          'request' => [
            'operation' => 'ListEndpointsByPlatformApplication',
            'params' => [
              [
                'target' => 'PlatformApplicationArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
          'resource' => [
            'type' => 'PlatformEndpoint',
            'identifiers' => [
              [
                'target' => 'Arn',
                'sourceType' => 'responsePath',
                'source' => 'Endpoints[].EndpointArn',
              ],
            ],
          ],
        ],
      ],
    ],
    'PlatformEndpoint' => [
      'identifiers' => [
        [
          'name' => 'Arn',
        ],
      ],
      'shape' => 'GetEndpointAttributesResponse',
      'load' => [
        'request' => [
          'operation' => 'GetEndpointAttributes',
          'params' => [
            [
              'target' => 'EndpointArn',
              'sourceType' => 'identifier',
              'source' => 'Arn',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteEndpoint',
            'params' => [
              [
                'target' => 'EndpointArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'Publish' => [
          'request' => [
            'operation' => 'Publish',
            'params' => [
              [
                'target' => 'TargetArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'SetAttributes' => [
          'request' => [
            'operation' => 'SetEndpointAttributes',
            'params' => [
              [
                'target' => 'EndpointArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
      ],
    ],
    'Subscription' => [
      'identifiers' => [
        [
          'name' => 'TopicArn',
        ],
        [
          'name' => 'Arn',
        ],
      ],
      'shape' => 'GetSubscriptionAttributesResponse',
      'load' => [
        'request' => [
          'operation' => 'GetSubscriptionAttributes',
          'params' => [
            [
              'target' => 'SubscriptionArn',
              'sourceType' => 'identifier',
              'source' => 'Arn',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'Unsubscribe',
            'params' => [
              [
                'target' => 'SubscriptionArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'SetAttributes' => [
          'request' => [
            'operation' => 'SetSubscriptionAttributes',
            'params' => [
              [
                'target' => 'SubscriptionArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
      ],
    ],
    'Topic' => [
      'identifiers' => [
        [
          'name' => 'Arn',
        ],
      ],
      'shape' => 'GetTopicAttributesResponse',
      'load' => [
        'request' => [
          'operation' => 'GetTopicAttributes',
          'params' => [
            [
              'target' => 'TopicArn',
              'sourceType' => 'identifier',
              'source' => 'Arn',
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
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'ConfirmSubscription' => [
          'request' => [
            'operation' => 'ConfirmSubscription',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Subscription',
            'identifiers' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
              [
                'target' => 'Arn',
                'sourceType' => 'responsePath',
                'source' => 'SubscriptionArn',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteTopic',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'Publish' => [
          'request' => [
            'operation' => 'Publish',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'RemovePermission' => [
          'request' => [
            'operation' => 'RemovePermission',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'SetAttributes' => [
          'request' => [
            'operation' => 'SetTopicAttributes',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'Subscribe' => [
          'request' => [
            'operation' => 'Subscribe',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Subscription',
            'identifiers' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
              [
                'target' => 'Arn',
                'sourceType' => 'responsePath',
                'source' => 'SubscriptionArn',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Subscriptions' => [
          'request' => [
            'operation' => 'ListSubscriptionsByTopic',
            'params' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Subscription',
            'identifiers' => [
              [
                'target' => 'TopicArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
              [
                'target' => 'Arn',
                'sourceType' => 'responsePath',
                'source' => 'Subscriptions[].SubscriptionArn',
              ],
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'Subscription',
        ],
        'identifiers' => [
          'Arn' => 'TopicArn',
        ],
      ],
    ],
  ],
];
