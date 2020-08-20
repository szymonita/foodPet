import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speciesFilter'
})
export class SpeciesFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log();
    return null;
  }

}
