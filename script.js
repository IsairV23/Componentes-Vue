Vue.component('area-calculadora', {
    template: `
      <div class="card card-custom text-center">
        <h2 class="mb-4">Cálculo de Áreas</h2>
        <select class="form-control mb-4" v-model="figura">
          <option value="">Selecciona una figura</option>
          <option value="cuadrado">Cuadrado</option>
          <option value="rectangulo">Rectángulo</option>
          <option value="triangulo">Triángulo</option>
        </select>
  
        <div v-if="figura">
          <component :is="figura + '-componente'" @resultado="mostrarResultado"></component>
          <p v-if="resultado" class="alert alert-success mt-4 font-weight-bold">El área es: {{ resultado }} unidades²</p>
        </div>
      </div>
    `,
    data() {
      return {
        figura: '',
        resultado: ''
      };
    },
    methods: {
      mostrarResultado(area) {
        this.resultado = area;
      }
    }
  });
  
  Vue.component('cuadrado-componente', {
    template: `
      <div>
        <input v-model="lado" type="number" class="form-control mb-3" placeholder="Ingresa el lado del cuadrado">
        <button class="btn btn-outline-light btn-block" @click="calcularArea">
          <i class="fas fa-calculator"></i> Calcular Área
        </button>
      </div>
    `,
    data() {
      return {
        lado: 0
      };
    },
    methods: {
      calcularArea() {
        let area = this.lado * this.lado;
        this.$emit('resultado', area);
      }
    }
  });
  
  Vue.component('rectangulo-componente', {
    template: `
      <div>
        <input v-model="base" type="number" class="form-control mb-3" placeholder="Ingresa la base del rectángulo">
        <input v-model="altura" type="number" class="form-control mb-3" placeholder="Ingresa la altura del rectángulo">
        <button class="btn btn-outline-light btn-block" @click="calcularArea">
          <i class="fas fa-ruler-combined"></i> Calcular Área
        </button>
      </div>
    `,
    data() {
      return {
        base: 0,
        altura: 0
      };
    },
    methods: {
      calcularArea() {
        let area = this.base * this.altura;
        this.$emit('resultado', area);
      }
    }
  });
  
  Vue.component('triangulo-componente', {
    template: `
      <div>
        <input v-model="base" type="number" class="form-control mb-3" placeholder="Ingresa la base del triángulo">
        <input v-model="altura" type="number" class="form-control mb-3" placeholder="Ingresa la altura del triángulo">
        <button class="btn btn-outline-light btn-block" @click="calcularArea">
          <i class="fas fa-drafting-compass"></i> Calcular Área
        </button>
      </div>
    `,
    data() {
      return {
        base: 0,
        altura: 0
      };
    },
    methods: {
      calcularArea() {
        let area = (this.base * this.altura) / 2;
        this.$emit('resultado', area);
      }
    }
  });
  
  new Vue({
    el: '#app'
  });
  