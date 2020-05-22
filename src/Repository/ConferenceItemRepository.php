<?php

namespace App\Repository;

use App\Entity\ConferenceItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ConferenceItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConferenceItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConferenceItem[]    findAll()
 * @method ConferenceItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConferenceItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConferenceItem::class);
    }

    // /**
    //  * @return ConferenceItem[] Returns an array of ConferenceItem objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConferenceItem
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
