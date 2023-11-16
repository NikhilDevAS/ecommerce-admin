import Layout from '@/components/Layout';

export default function Settings() {
  [
    {
      _id: '6532c391fc555a7ba5cfe5d3',
      id: '52da359a',
      userId: '653105e09f1c8152a5a6c294',
      products: [
        {
          _id: '651d11dbbcbaf787163083a1',
          title: 'Nikhil',
          description: 'Ab aliquip delectus',
          price: 44,
          __v: 0,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/zTepQJhxcr04d38-pbQgx6ne.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/OxYT7_2aQi77Z1cV7cC4HsxB.jpg',
          ],
          category: {
            _id: '652aa55a6129f83baa3265a6',
            name: 'Mobile',
            properties: [],
            __v: 0,
          },
          updatedAt: '2023-10-20T15:44:47.976Z',
          profitPercentage: 90,
          quantity: 5,
        },
        {
          _id: '651d50a68d7adc77d34f038e',
          title: 'Quia ut laboris est ',
          description: 'Qui iusto provident',
          price: 79,
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697469125/K6C92tjAih-s9CWdE3duHfl1.png',
          ],
          properties: {
            'Storage (GB)': '128',
            Color: 'Black',
          },
          updatedAt: '2023-10-16T15:12:13.926Z',
          quantity: 1,
        },
        {
          _id: '651d8825f40bdc8dc99da6c6',
          title: 'Cupidatat vel non of',
          description: 'Autem rerum non in i',
          price: 45,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434202/kla2qIikXDK4aCmJlcle5Jeq.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434209/acpwcw6Bq83LMu44S-jIxXCZ.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434987/p-bZTvY_G-fUlAxVcuI0OweM.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696435066/1msP48LgJYRvZk05LD9ArqbS.jpg',
          ],
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:12:27.168Z',
          quantity: 1,
        },
        {
          _id: '652702317ce59c462a45fcad',
          title: 'Quasi cum hic aspern',
          description: 'Deserunt quis quia f',
          price: 27,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697055277/DufdLhonQlI_XkC1F2OVO9SS.png',
          ],
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:12:42.203Z',
          quantity: 1,
        },
        {
          _id: '652a75b676c74de121de244d',
          title: 'Quis tempor laboris ',
          description: 'Animi ad iure non e',
          price: 28,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697281441/K2OgdLHN6wcszoQNHTDEo_qV.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697281454/sAOcIJTkf7otHQBPMans8j_g.png',
          ],
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          __v: 0,
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:13:01.901Z',
          quantity: 1,
        },
        {
          _id: '652aa7206129f83baa3265ca',
          title: 'Iphone Pro Max',
          description: 'test description ',
          price: 120,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697294075/UepYyqs372Hd32kcuIYb_K1l.png',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697294084/lrwBgrIF4YYHPcT_OoGZeIBz.png',
          ],
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          __v: 0,
          properties: {
            'Storage (GB)': '520',
            Color: 'Blue',
          },
          updatedAt: '2023-10-20T15:45:53.988Z',
          profitPercentage: 10,
          quantity: 1,
        },
      ],
      paid: false,
      subtotal: 519,
      gst: 8,
      netamount: 560.52,
      paymentType: 'COD',
      createdAt: '2023-09-20T18:14:41.746Z',
      updatedAt: '2023-09-20T19:13:33.224Z',
      __v: 0,
      status: 'Rejected',
    },
    {
      _id: '6532c391fc555a7ba5cfe5d3',
      id: '52da359a',
      userId: '653105e09f1c8152a5a6c294',
      products: [
        {
          _id: '651d11dbbcbaf787163083a1',
          title: 'Nikhil',
          description: 'Ab aliquip delectus',
          price: 44,
          __v: 0,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/zTepQJhxcr04d38-pbQgx6ne.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/OxYT7_2aQi77Z1cV7cC4HsxB.jpg',
          ],
          category: {
            _id: '652aa55a6129f83baa3265a6',
            name: 'Mobile',
            properties: [],
            __v: 0,
          },
          updatedAt: '2023-10-20T15:44:47.976Z',
          profitPercentage: 90,
          quantity: 5,
        },
        {
          _id: '651d50a68d7adc77d34f038e',
          title: 'Quia ut laboris est ',
          description: 'Qui iusto provident',
          price: 79,
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697469125/K6C92tjAih-s9CWdE3duHfl1.png',
          ],
          properties: {
            'Storage (GB)': '128',
            Color: 'Black',
          },
          updatedAt: '2023-10-16T15:12:13.926Z',
          quantity: 1,
        },
        {
          _id: '651d8825f40bdc8dc99da6c6',
          title: 'Cupidatat vel non of',
          description: 'Autem rerum non in i',
          price: 45,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434202/kla2qIikXDK4aCmJlcle5Jeq.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434209/acpwcw6Bq83LMu44S-jIxXCZ.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434987/p-bZTvY_G-fUlAxVcuI0OweM.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696435066/1msP48LgJYRvZk05LD9ArqbS.jpg',
          ],
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:12:27.168Z',
          quantity: 1,
        },
        {
          _id: '652702317ce59c462a45fcad',
          title: 'Quasi cum hic aspern',
          description: 'Deserunt quis quia f',
          price: 27,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697055277/DufdLhonQlI_XkC1F2OVO9SS.png',
          ],
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:12:42.203Z',
          quantity: 1,
        },
        {
          _id: '652a75b676c74de121de244d',
          title: 'Quis tempor laboris ',
          description: 'Animi ad iure non e',
          price: 28,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697281441/K2OgdLHN6wcszoQNHTDEo_qV.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697281454/sAOcIJTkf7otHQBPMans8j_g.png',
          ],
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          __v: 0,
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:13:01.901Z',
          quantity: 1,
        },
        {
          _id: '652aa7206129f83baa3265ca',
          title: 'Iphone Pro Max',
          description: 'test description ',
          price: 120,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697294075/UepYyqs372Hd32kcuIYb_K1l.png',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697294084/lrwBgrIF4YYHPcT_OoGZeIBz.png',
          ],
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          __v: 0,
          properties: {
            'Storage (GB)': '520',
            Color: 'Blue',
          },
          updatedAt: '2023-10-20T15:45:53.988Z',
          profitPercentage: 10,
          quantity: 1,
        },
      ],
      paid: false,
      subtotal: 519,
      gst: 8,
      netamount: 560.52,
      paymentType: 'COD',
      createdAt: '2023-10-20T18:14:41.746Z',
      updatedAt: '2023-10-20T19:13:33.224Z',
      __v: 0,
      status: 'Rejected',
    },
    {
      _id: '6532c41ffc555a7ba5cfe5dd',
      id: '4a9507a2',
      userId: '653105e09f1c8152a5a6c294',
      products: [
        {
          _id: '651d11dbbcbaf787163083a1',
          title: 'Nikhil',
          description: 'Ab aliquip delectus',
          price: 44,
          __v: 0,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/zTepQJhxcr04d38-pbQgx6ne.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697056180/OxYT7_2aQi77Z1cV7cC4HsxB.jpg',
          ],
          category: {
            _id: '652aa55a6129f83baa3265a6',
            name: 'Mobile',
            properties: [],
            __v: 0,
          },
          updatedAt: '2023-10-20T15:44:47.976Z',
          profitPercentage: 90,
          quantity: 1,
        },
        {
          _id: '651d50a68d7adc77d34f038e',
          title: 'Quia ut laboris est ',
          description: 'Qui iusto provident',
          price: 79,
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1697469125/K6C92tjAih-s9CWdE3duHfl1.png',
          ],
          properties: {
            'Storage (GB)': '128',
            Color: 'Black',
          },
          updatedAt: '2023-10-16T15:12:13.926Z',
          quantity: 1,
        },
        {
          _id: '651d8825f40bdc8dc99da6c6',
          title: 'Cupidatat vel non of',
          description: 'Autem rerum non in i',
          price: 45,
          images: [
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434202/kla2qIikXDK4aCmJlcle5Jeq.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434209/acpwcw6Bq83LMu44S-jIxXCZ.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696434987/p-bZTvY_G-fUlAxVcuI0OweM.jpg',
            'https://res.cloudinary.com/dikpoctfq/image/upload/v1696435066/1msP48LgJYRvZk05LD9ArqbS.jpg',
          ],
          __v: 0,
          category: {
            _id: '652aa5bf6129f83baa3265a9',
            name: 'Iphone',
            parent: '652aa55a6129f83baa3265a6',
            properties: [
              {
                name: 'Color',
                value: ['Red', 'White', 'Black', 'Blue'],
              },
              {
                name: 'Storage (GB)',
                value: ['32', '64', '128', '256', '520'],
              },
            ],
            __v: 0,
          },
          properties: {
            Color: 'Black',
            'Storage (GB)': '256',
          },
          updatedAt: '2023-10-16T15:12:27.168Z',
          quantity: 1,
        },
      ],
      paid: false,
      subtotal: 168,
      gst: 8,
      netamount: 181.44,
      paymentType: 'COD',
      createdAt: '2023-10-20T18:17:03.633Z',
      updatedAt: '2023-10-20T19:09:36.162Z',
      __v: 0,
      status: 'Delivered',
    },
  ];
  return (
    <Layout>
      Settings Page is Here
      <h1>Add Percentage for profit</h1>
      <h1>Select Featured Product</h1>
      <h1>Change Password</h1>
    </Layout>
  );
}
