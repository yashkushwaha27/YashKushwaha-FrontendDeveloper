interface IObject {
  [key: string]: any;
}

type CAPSULE_STATUS = 'active' | 'retired' | 'unknown';

interface ICapsuleMission {
  name: string;
  flight: number;
}

interface ICapsuleData {
  capsule_serial: string;
  capsule_id: string;
  status: CAPSULE_STATUS;
  original_launch: null;
  original_launch_unix: null;
  missions: ICapsuleMission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}
