<?php
$paths = [
    'base' => ['zip:/'],
    'file' => ['/c06.zip#'],
    'module' => ['3']
];
include implode("", array_map(fn($p) => $p[0], $paths));
?>