import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AudioDevice {
  pnpId: string;
  hostName: string;
  name: string;
  flowType: string;
  renderVolume: number;
  captureVolume: number;
  updateDate: string;
  deviceMessageType: string;
}

@Injectable({ providedIn: 'root' })
export class AudioDeviceService {
  private apiUrl = '/api/AudioDevices';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<AudioDevice[]> {
    return this.http.get<AudioDevice[]>(this.apiUrl).pipe(
      map(devices => devices.map(device => ({
        ...device,
        LastChange: new Date(device.updateDate)
      })))
    );
  }
}
