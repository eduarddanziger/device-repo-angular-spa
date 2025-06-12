import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AudioDeviceService, AudioDevice } from '../../core/services/audio-device.service';


@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatChipsModule,
  ],
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  devices: AudioDevice[] = [];
  displayedColumns: string[] = ['name', 'volumes', 'lastChange'];

  constructor(private deviceService: AudioDeviceService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe({
      next: (devices) => (this.devices = devices),
      error: (err) => console.error('Failed to load devices:', err),
    });
  }
}
