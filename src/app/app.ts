import { Component } from '@angular/core';
import { ApiResponse, UserInfo, TaskInfo } from './models/data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  userData: ApiResponse<UserInfo> = {
    data: {
      id: 'INT-001',
      fullName: 'Nguyễn Bảo Hân',
      position: 'Software Engineering Intern'
    },
    status: 200,
    message: 'Success'
  };

  taskList: ApiResponse<TaskInfo[]> = {
    data: [
      { id: 1, title: 'Tìm hiểu TypeScript & Interface', status: 'Hoàn thành', time: '2 giờ trước' },
      { id: 2, title: 'Thực hành Data Binding', status: 'Đang làm', time: '10 phút trước' },
      { id: 3, title: 'Push code lên GitHub', status: 'Chưa bắt đầu', time: 'Dự kiến hôm nay' }
    ],
    status: 200,
    message: 'Success'
  };

  buttonColor: string = '#4318ff';

  sendReport(): void {
    alert('Đã gửi báo cáo tuần 1!');
  }
}