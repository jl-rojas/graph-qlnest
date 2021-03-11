// import { AppModule } from '../../app.module';
// import { SumMatcher } from './SumMatcher'; // defined in step 1.
// import { TestingApp } from 'nestjs-bdd';
// import { TestingModule } from '@nestjs/testing';
// import { ApplicationConfig, HttpAdapterHost, NestApplication, NestContainer, NestFactory } from '@nestjs/core';
// import { INestApplication } from '@nestjs/common';
// import { Http2ServerRequest } from 'node:http2';

// const app = new TestingApp(AppModule, [SumMatcher], {
//   createApp: (testing: TestingModule) => {
//     console.log(testing);
//     return new NestApplication()
//   },
// });

// beforeAll(() => app.start());

// app.findInDir('./features'); // Scan recursively for *.feature files. (e.g. defined in step 2.)

// afterAll(() => app.stop());
