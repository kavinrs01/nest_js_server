import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(5000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap(); 