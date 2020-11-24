<template>
    <layout>
        <div class="bg-cover bg-center hero h-auto  object-fill  image-bg" >
            <div class="flex  flex-col justify-center items-center bg-image">
                <p class="font-bold text-center text-2xl  p-4 lg:font-bold lg:text-center text-black  uppercase lg:text-4xl">  Analítica  & Monetización wifi</p>
                <p class="no lg:font-medium lg:text-2xl lg:text-black">La plataforma líder en América Latina en analítica wifi y ciencia de datos.</p>
            </div>  
        </div>

        <section class="text-gray-700 body-font">
            <div class="container px-5 py-10 lg:py-20 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full  md:h-auto md:w-auto" src="https://res.cloudinary.com/uayeb/image/upload/v1601397380/soluciones/datawifi_nfjfny.webp">
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div class="w-32 h-32 rounded-full inline-flex items-center justify-center">
                        <g-image src="https://res.cloudinary.com/uayeb/image/upload/v1599500927/logos/datawifi_bsigr2.png" />
                    </div>
                    <div class="flex flex-col items-center text-center justify-center">
                        <h2 class="font-medium title-font mt-4 text-black text-lg">Datawifi</h2>
                        <div class="w-12 h-1 bg-red-700 rounded mt-2 mb-4"></div>
                    </div>
                    </div>
                    <div class="flex justify-center items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p class="leading-relaxed text-lg mb-4">Partners Oficiales en México y Centroamérica.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </layout>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media only screen and (min-width: 0px)  and (max-width: 768px) {

.image-bg{
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(197,48,48,1) 0%, rgba(229,62,62,1) 82.8% );
    }
    .bg-image{
        height: 50vh;
    }
.no{
    display: none;
}
}

@media only screen and (min-width: 769px)  and (max-width: 2900px) {

.image-bg{
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(197,48,48,1) 0%, rgba(229,62,62,1) 82.8% );
}

    .bg-image{
        height: 50vh;
    }

}

</style>