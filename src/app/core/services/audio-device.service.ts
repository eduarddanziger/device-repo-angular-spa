import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = '/api/AudioDevices'; // Proxy to your API

  constructor(private http: HttpClient) { }

  getDevices(): Observable<AudioDevice[]> {
    return this.http.get<AudioDevice[]>(this.apiUrl);
  }
}
