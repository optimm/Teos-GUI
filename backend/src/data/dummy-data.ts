import { Appointment, TowerInfoDto, UserData } from '../modules/tower-cli/dto';

export const towerDummyData: TowerInfoDto = {
  tower_id:
    '03bf05e02c495927554696008b05157a728c58a561f600222c57e9c00404e8c5bb',
  n_registered_users: 4,
  n_watcher_appointments: 2,
  n_responder_trackers: 0,
  bitcoind_reachable: true,
  addresses: [
    {
      type: 'ipv4',
      address: '127.0.0.1',
      port: 9814,
    },
  ],
};

export const dummyUserPublicKey =
  '038342ef6a581129a7e2d185e6f0ee1ce4ae94034b0c91f5a5db9ae6cc3ba80a4c';

export const allUsersDummyData: string[] = [dummyUserPublicKey];
export const dummyAppointmentLocator = 'f17b80e532b815a914ba437d3f88fef5';

export const dummyUserData: UserData = {
  available_slots: 9999,
  subscription_expiry: 4430,
  appointments: [dummyAppointmentLocator],
};

export const dummyAppointments: Appointment[] = [
  {
    locator: dummyAppointmentLocator,
    encrypted_blob:
      '69d8800d5964cc66dfd6409f6da1122059e7f41d174065bca00ef065831d21bb933ef2b35783d522cd745690c2e698ff4b97b7bb6470d854a78ce6e03a9f8a9a6d5a606965fd36baf0552d469325b0801c1682b1958fd795a4c60f93ffb30ec4ab2a3a7b9a33f38670b73d19684a807ad1750be689f8da88151eb156d4336ab574043925da1659d1d6a702c7d5bbde48052b3d141f1d2c09b969bb4cbdcbcf4c2c00aa05a0430b04ca1831e0a1db92eb7f9dbd98d09984bc2ac8a80c110b1fabe83f5e37d0afebd0573aee46bffa8947311c27b4321ad022d753489fe4b7e668af899972017bd1f8d33aa2ad3fba99c068ec72e73047b25dea1172f5ffaf5758d7a94442b01d3cd5152ce6c4deff73544206d74f989da69be22daf1e762a47fd2e937fe54846e279b71c34f2d5b7e929d3836ccfd9150f7e5f7547925b7a4d5121077c475b06e72219670b124be9783c1c62c306608d4e3bb44487d15683714bce0e854a9574707035d4dc1158225e',
    to_self_delay: 42,
  },
];
