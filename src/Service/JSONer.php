<?php


namespace App\Service;


use JMS\Serializer\Naming\IdenticalPropertyNamingStrategy;
use JMS\Serializer\Naming\SerializedNameAnnotationStrategy;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;

class JSONer
{
    public function toJSON($data):string{
        $builder = SerializerBuilder::create();
        $namingStrategy = new SerializedNameAnnotationStrategy(new IdenticalPropertyNamingStrategy());
        $builder->setPropertyNamingStrategy($namingStrategy);
        $serializer = $builder->build();
        $context = SerializationContext::create()->enableMaxDepthChecks();
        $json = null;
        if($context instanceof SerializationContext){
            $context->setSerializeNull(true);
            $json = $serializer->serialize($data, 'json', $context);
        }
        return $json;
    }

    public function ArrayToCSV(array $array):string {
        ob_start();
        $out = fopen('php://output', 'w');
        foreach ($array as $fields) {
            fputcsv($out, $fields);
        }
        $content = ob_get_contents();
        ob_end_clean();
        fclose($out);
        return $content;
    }
}
