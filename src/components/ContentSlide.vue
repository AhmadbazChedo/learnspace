<template>
  <div class="content-slide card">
    <div class="slide-header">
      <h2 class="slide-title">{{ content.title }}</h2>
      <div class="slide-number">{{ step }} / {{ total }}</div>
    </div>

    <div class="slide-content">
      <!-- Intro Slide -->
      <div v-if="content.type === 'intro'" class="intro-slide">
        <div class="intro-icon">{{ content.icon }}</div>
        <h1 class="intro-title gradient-text">{{ content.title }}</h1>
        <p class="intro-subtitle">{{ content.subtitle }}</p>
      </div>

      <!-- HTML Content (from modules.js) -->
      <div v-else-if="content.content" class="html-content" v-html="content.content"></div>

      <!-- Text Content -->
      <div v-else-if="content.type === 'text'" class="text-content">
        <p v-for="(paragraph, index) in content.text" :key="index" class="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <!-- List Content -->
      <div v-if="content.type === 'list'" class="list-content">
        <p v-if="content.intro" class="intro-text">{{ content.intro }}</p>
        <ul class="custom-list">
          <li v-for="(item, index) in content.items" :key="index" class="list-item">
            <span class="item-number">{{ index + 1 }}</span>
            <div class="item-content">
              <strong v-if="item.title">{{ item.title }}:</strong>
              <span>{{ item.text || item }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Visual Content (Prinzipien, 5S, etc.) -->
      <div v-if="content.type === 'visual'" class="visual-content">
        <p v-if="content.intro" class="intro-text">{{ content.intro }}</p>
        
        <!-- Prinzipien Grid -->
        <div v-if="content.layout === 'prinzipien'" class="prinzipien-grid">
          <div 
            v-for="(prinzip, index) in content.items" 
            :key="index"
            class="prinzip-card"
            :style="{ animationDelay: (index * 0.1) + 's' }"
          >
            <div class="prinzip-number">{{ index + 1 }}</div>
            <h3 class="prinzip-title">{{ prinzip.title }}</h3>
            <p class="prinzip-desc">{{ prinzip.description }}</p>
          </div>
        </div>

        <!-- 5S Visual -->
        <div v-if="content.layout === '5s'" class="five-s-visual">
          <div 
            v-for="(item, index) in content.items" 
            :key="index"
            class="five-s-item"
            :style="{ animationDelay: (index * 0.15) + 's' }"
          >
            <div class="five-s-number">{{ index + 1 }}</div>
            <div class="five-s-info">
              <h3 class="five-s-title">{{ item.term }}</h3>
              <p class="five-s-translation">{{ item.translation }}</p>
              <p class="five-s-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- 3MU Venn Diagram -->
        <div v-if="content.layout === '3mu'" class="three-mu-diagram">
          <div class="mu-circles">
            <div class="mu-circle muda">
              <h3>Muda</h3>
              <p>Verschwendung</p>
            </div>
            <div class="mu-circle mura">
              <h3>Mura</h3>
              <p>Unregelmäßigkeit</p>
            </div>
            <div class="mu-circle muri">
              <h3>Muri</h3>
              <p>Überlastung</p>
            </div>
          </div>
          <div class="mu-details">
            <div v-for="(item, index) in content.items" :key="index" class="mu-detail-card">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
              <ul v-if="item.examples">
                <li v-for="(ex, i) in item.examples" :key="i">{{ ex }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Matrix/Table -->
        <div v-if="content.layout === 'matrix'" class="matrix-visual">
          <div class="matrix-table">
            <div class="matrix-header">
              <div class="header-cell"></div>
              <div v-for="col in content.columns" :key="col" class="header-cell">{{ col }}</div>
            </div>
            <div v-for="(row, index) in content.rows" :key="index" class="matrix-row">
              <div class="row-label">{{ row.label }}</div>
              <div v-for="(value, i) in row.values" :key="i" class="matrix-cell">
                {{ value }}
              </div>
            </div>
          </div>
        </div>

        <!-- ABC-XYZ Grid -->
        <div v-if="content.layout === 'abc-xyz'" class="abc-xyz-grid">
          <div 
            v-for="(item, index) in content.items" 
            :key="index"
            class="abc-item"
            :class="item.class"
          >
            <div class="abc-label">{{ item.label }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <div v-if="item.criteria" class="criteria">
              <strong>Kriterium:</strong> {{ item.criteria }}
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Example -->
      <div v-if="content.type === 'example'" class="example-content">
        <div class="example-header">
          <h3>{{ content.title }}</h3>
          <p class="example-intro">{{ content.intro }}</p>
        </div>
        
        <!-- Nordwest-Ecken Example -->
        <div v-if="content.method === 'nordwest'" class="nordwest-example">
          <div class="method-explanation">
            <p><strong>Transportkostensatz:</strong> {{ content.cost }} pro Kilometer</p>
          </div>
          <div class="transportation-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th v-for="dest in content.destinations" :key="dest">{{ dest }}</th>
                  <th>Lagerkapazität</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(source, index) in content.sources" :key="source">
                  <th>{{ source }}</th>
                  <td v-for="(value, i) in content.distances[index]" :key="i">
                    {{ value }} km
                    <span v-if="content.solution && content.solution[index][i]" class="allocation">
                      ({{ content.solution[index][i] }})
                    </span>
                  </td>
                  <td class="capacity">{{ content.sourceCapacity[index] }}</td>
                </tr>
                <tr class="demand-row">
                  <th>Bedarf</th>
                  <td v-for="demand in content.demands" :key="demand" class="demand">
                    {{ demand }}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="content.calculation" class="calculation-result">
            <h4>Berechnung:</h4>
            <p v-html="content.calculation"></p>
            <div class="total-cost">
              Gesamttransportkosten: <strong>{{ content.totalCost }}€</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSlide',
  props: {
    content: {
      type: Object,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.content-slide {
  animation: fadeIn 0.5s ease-out;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%);
  position: relative;
  overflow: hidden;
}

.content-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent));
  opacity: 0.5;
}

.slide-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(99, 102, 241, 0.2);
}

.slide-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
}

.slide-number {
  font-size: 1rem;
  color: var(--color-primary-light);
  font-weight: 600;
  background: rgba(99, 102, 241, 0.15);
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
}

.slide-content {
  line-height: 1.8;
}

/* Intro Slide */
.intro-slide {
  text-align: center;
  padding: 4rem 2rem;
}

.intro-icon {
  font-size: 8rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.6));
  animation: float 3s ease-in-out infinite;
}

.intro-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
}

.intro-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Text Content */
.paragraph {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

.intro-text {
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: var(--color-text);
  font-weight: 500;
}

/* HTML Content */
.html-content {
  line-height: 1.8;
}

.html-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-primary-light);
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
}

.html-content h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.html-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.html-content strong {
  color: var(--color-text);
  font-weight: 700;
}

.html-content em {
  color: var(--color-primary-light);
  font-style: italic;
}

.html-content ul, .html-content ol {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.html-content li {
  margin-bottom: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* List Content */
.custom-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--color-primary);
  transition: all 0.3s ease;
}

.list-item:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateX(5px);
}

.item-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.item-content {
  flex: 1;
}

/* Prinzipien Grid */
.prinzipien-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.prinzip-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  animation: fadeIn 0.6s ease-out both;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.prinzip-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.prinzip-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
}

.prinzip-card:hover::before {
  opacity: 1;
}

.prinzip-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  position: relative;
  z-index: 2;
}

.prinzip-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-primary-light);
  position: relative;
  z-index: 2;
}

.prinzip-desc {
  color: var(--color-text-muted);
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

/* 5S Visual */
.five-s-visual {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.five-s-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-radius: 16px;
  border-left: 6px solid var(--color-primary);
  animation: slideInLeft 0.6s ease-out both;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.five-s-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.five-s-item:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%);
  transform: translateX(15px);
  box-shadow: var(--glow-primary);
}

.five-s-item:hover::before {
  opacity: 1;
}

.five-s-number {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 2rem;
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
  position: relative;
  z-index: 2;
}

.five-s-info {
  flex: 1;
  position: relative;
  z-index: 2;
}

.five-s-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary-light);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
}

.five-s-translation {
  font-size: 1.125rem;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.five-s-desc {
  color: var(--color-text-muted);
  line-height: 1.6;
  font-size: 1rem;
}

/* 3MU Diagram */
.three-mu-diagram {
  margin-top: 2rem;
}

.mu-circles {
  position: relative;
  height: 300px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mu-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.mu-circle:hover {
  transform: scale(1.1);
  opacity: 1;
  z-index: 10;
}

.mu-circle h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.mu-circle p {
  font-size: 0.875rem;
}

.muda {
  background: rgba(99, 102, 241, 0.3);
  border: 3px solid var(--color-primary);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.mura {
  background: rgba(16, 185, 129, 0.3);
  border: 3px solid var(--color-secondary);
  bottom: 0;
  left: 20%;
}

.muri {
  background: rgba(245, 158, 11, 0.3);
  border: 3px solid var(--color-accent);
  bottom: 0;
  right: 20%;
}

.mu-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.mu-detail-card {
  background: rgba(99, 102, 241, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.mu-detail-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary-light);
}

.mu-detail-card p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.mu-detail-card ul {
  list-style: none;
  padding-left: 0;
}

.mu-detail-card li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text-muted);
}

.mu-detail-card li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* ABC-XYZ Grid */
.abc-xyz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.abc-item {
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid;
  transition: all 0.3s ease;
}

.abc-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.abc-item.r-artikel {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--color-primary);
}

.abc-item.s-artikel {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--color-secondary);
}

.abc-item.u-artikel {
  background: rgba(245, 158, 11, 0.1);
  border-color: var(--color-accent);
}

.abc-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: currentColor;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.abc-item.r-artikel .abc-label {
  background: var(--color-primary);
}

.abc-item.s-artikel .abc-label {
  background: var(--color-secondary);
}

.abc-item.u-artikel .abc-label {
  background: var(--color-accent);
}

.abc-item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.abc-item p {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.criteria {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Transportation Table */
.nordwest-example {
  margin-top: 2rem;
}

.method-explanation {
  background: rgba(99, 102, 241, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-primary);
}

.transportation-table {
  overflow-x: auto;
  margin-bottom: 2rem;
}

.transportation-table table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  overflow: hidden;
}

.transportation-table th,
.transportation-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.transportation-table thead th {
  background: var(--color-primary);
  color: white;
  font-weight: 700;
}

.transportation-table tbody th {
  background: rgba(99, 102, 241, 0.2);
  font-weight: 700;
}

.allocation {
  display: block;
  margin-top: 0.5rem;
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 1.125rem;
}

.capacity,
.demand {
  background: rgba(16, 185, 129, 0.1);
  font-weight: 700;
  color: var(--color-secondary);
}

.demand-row {
  background: rgba(16, 185, 129, 0.05);
}

.calculation-result {
  background: rgba(16, 185, 129, 0.1);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid var(--color-secondary);
}

.calculation-result h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-secondary);
}

.calculation-result p {
  color: var(--color-text-muted);
  line-height: 2;
  margin-bottom: 1.5rem;
}

.total-cost {
  font-size: 1.5rem;
  text-align: center;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  margin-top: 1rem;
}

.total-cost strong {
  color: var(--color-secondary);
  font-size: 2rem;
}

/* Matrix Table */
.matrix-table {
  overflow-x: auto;
  margin-top: 2rem;
}

.matrix-header,
.matrix-row {
  display: grid;
  grid-template-columns: 150px repeat(auto-fit, minmax(100px, 1fr));
  gap: 1px;
  background: rgba(99, 102, 241, 0.1);
}

.header-cell,
.row-label,
.matrix-cell {
  padding: 1rem;
  text-align: center;
  background: var(--color-bg-card);
}

.header-cell {
  background: var(--color-primary);
  color: white;
  font-weight: 700;
}

.row-label {
  background: rgba(99, 102, 241, 0.2);
  font-weight: 700;
}

.matrix-cell {
  font-weight: 600;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .slide-title {
    font-size: 1.5rem;
  }

  .prinzipien-grid,
  .abc-xyz-grid,
  .mu-details {
    grid-template-columns: 1fr;
  }

  .mu-circles {
    height: 400px;
  }

  .mu-circle {
    width: 150px;
    height: 150px;
  }

  .muda {
    top: 10px;
  }

  .mura {
    bottom: 10px;
    left: 10px;
  }

  .muri {
    bottom: 10px;
    right: 10px;
  }
}
</style>
