<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-10 offset-md-1" id="content-container">
        <h1>Promos</h1>
        <div v-if="promos.length">
          <table class="table table-striped" id="promos">
            <thead>
              <tr>
                <th>Code</th>
                <th>Target</th>
                <th>Description</th>
                <th>Validity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="promo in promos" :key="promo">
                <td>{{ promo.code }}</td>
                <td>{{ promo.target }}</td>
                <td>{{ promo.description }}</td>
                <td>{{ promo.endDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>No promos found.</div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
export default {
  name: "Promos",
  components: { Footer },
  data() {
    return { promos: [] };
  },
  methods: {
    async getPublicPromos() {
      const VALIDITY = 30;
      let endPromo = new Date();
      endPromo.setDate(endPromo.getDate() + VALIDITY);
      const END_DATE = endPromo.toDateString();
      this.promos = [
        {
          code: "10OFFICE",
          validFor: VALIDITY,
          target: "PUBLIC",
          endDate: END_DATE,
          description: "Okta Ice is cool. 10% off for everybody",
          meta: { revision: 0, created: 1684907456701, version: 0 },
          $loki: 1,
        },
        {
          code: "WILLYVANILLY",
          validFor: VALIDITY,
          target: "PUBLIC",
          endDate: END_DATEs,
          description: "15% off the new Vanilla collection",
          meta: { revision: 0, created: 1684907456701, version: 0 },
          $loki: 2,
        },
      ];
    },
  },
  mounted() {
    this.getPublicPromos();
  },
};
</script>
