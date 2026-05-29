export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface UserInfo {
  id: string;
  fullName: string;
  position: string;
}

export interface TaskInfo {
  id: number;
  title: string;
  status: string;
  time: string;
}